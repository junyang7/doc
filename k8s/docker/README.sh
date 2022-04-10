#!/usr/bin/env bash


ssh-copy-id root@172.16.10.146
ssh root@172.16.10.146


sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
sudo yum -y install yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo


# 安装稳定版本
sudo yum -y install docker-ce docker-ce-cli containerd.io
# 安装指定版本
# sudo yum -y install docker-ce-18.09.1 docker-ce-cli-18.09.1 containerd.io-18.09.1


sudo systemctl enable docker
sudo systemctl restart docker


# 测试
sudo docker run hello-world

docker run -dp 3000:3000 507979696/getting-started

