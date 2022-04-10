#!/usr/bin/env bash


#master:
#192.168.10.84


# ssh秘钥登陆（集群内部所有机器互通）
ssh-copy-id root@192.168.10.84
ssh root@192.168.10.84
ssh-keygen -t rsa


# 设置机器标识
hostnamectl set-hostname node0001
echo '127.0.0.1 node0001' >> /etc/hosts
echo '192.168.10.83 master' >> /etc/hosts
ip link
sudo cat /sys/class/dmi/id/product_uuid


# swap
swapoff -a
sed -i 's/.*swap.*/#&/' /etc/fstab


# firewalld
systemctl disable firewalld
systemctl stop firewalld


# SELINUX
sudo setenforce 0
sudo sed -i "s/^SELINUX=enforcing/SELINUX=disabled/g" /etc/sysconfig/selinux
sudo sed -i "s/^SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config
sudo sed -i "s/^SELINUX=permissive/SELINUX=disabled/g" /etc/sysconfig/selinux
sudo sed -i "s/^SELINUX=permissive/SELINUX=disabled/g" /etc/selinux/config


# docker
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum -y install docker-ce docker-ce-cli containerd.io
sudo mkdir -p /etc/docker
cat << EOF > /etc/docker/daemon.json
{
"exec-opts": [
"native.cgroupdriver=systemd"
],
"registry-mirrors": [
"https://0bb06s1q.mirror.aliyuncs.com"
],
"log-driver": "json-file",
"log-opts": {
"max-size": "100m"
},
"storage-driver": "overlay2",
"storage-opts": [
"overlay2.override_kernel_check=true"
]
}
EOF
systemctl daemon-reload
systemctl enable docker
systemctl restart docker


# kubernetes
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
sudo yum install -y kubelet kubeadm --disableexcludes=kubernetes
systemctl enable kubelet.service


# 加入集群
kubeadm config print join-defaults > join.default.yaml
sed -i "s/apiServerEndpoint: kube-apiserver:6443/apiServerEndpoint: master:6443/g" join.default.yaml
sed -i "s/token: abcdef.0123456789abcdef/token: abcdef.0123456789abcdef/g" join.default.yaml
sed -i "s/tlsBootstrapToken: abcdef.0123456789abcdef/tlsBootstrapToken: abcdef.0123456789abcdef/g" join.default.yaml
kubeadm join --config=join.default.yaml


