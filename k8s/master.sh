#!/usr/bin/env bash


#master:
#192.168.10.83


# ssh秘钥登陆（集群内部所有机器互通）
ssh-copy-id root@192.168.10.83
ssh root@192.168.10.83
ssh-keygen -t rsa


# 设置机器标识
hostnamectl set-hostname master
echo '127.0.0.1 master' >> /etc/hosts
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
systemctl enable docker.service
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
sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
sudo systemctl enable --now kubelet
kubeadm config print init-defaults > init.default.yaml
sed -i "s/name: node/name: master/g" init.default.yaml
sed -i "s/advertiseAddress: 1.2.3.4/advertiseAddress: 192.168.10.83/g" init.default.yaml
sed -i "s/imageRepository: k8s.gcr.io/imageRepository: registry.aliyuncs.com\/google_containers/g" init.default.yaml
kubeadm config images list --config init.default.yaml
kubeadm config images pull --config init.default.yaml
kubeadm init --config=init.default.yaml



kubeadm join 192.168.10.83:6443 --token abcdef.0123456789abcdef \
--discovery-token-ca-cert-hash sha256:a58fc8f13c51a4c0ba14067bbb8e7f5fdcef38a6aa6485f7db9be3719824a52d

export KUBECONFIG=/etc/kubernetes/admin.conf
kubectl get nodes


# 安装网络
kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml


# 查看节点
kubectl get nodes
kubectl get pods --all-namespace

