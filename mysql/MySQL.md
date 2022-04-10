# 00:50:56:3C:A7:12
# 192.168.10.12
# mysql.yangzaizai.com


setenforce 0
sed -i "s/SELINUX=permissive/SELINUX=disabled/g" /etc/selinux/config
sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config


# 构建LVM逻辑卷data挂载到/data目录
df -h
lsblk
pvcreate /dev/nvme0n2 /dev/nvme0n3
vgcreate vg /dev/nvme0n2 /dev/nvme0n3
lvcreate -n data -L 190G vg
mkfs.ext4 /dev/vg/data
mkdir /data
mount /dev/vg/data /data
echo '/dev/vg/data /data ext4 defaults 0 0' >> /etc/fstab
sync
reboot


# 配置yum源
rm -rf /etc/yum.repos.d/*
echo '
[base]
name=CentOS-$releasever - Base
baseurl=http://192.168.10.3/base
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/base.repo
echo '
[updates]
name=CentOS-$releasever - Updates
baseurl=http://192.168.10.3/updates
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/updates.repo
echo '
[extras]
name=CentOS-$releasever - Extras
baseurl=http://192.168.10.3/extras
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/extras.repo
echo '
[centosplus]
name=CentOS-$releasever - Plus
baseurl=http://192.168.10.3/centosplus
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/centosplus.repo
echo '
[epel]
name=Extra Packages for Enterprise Linux 7 - $basearch
baseurl=http://192.168.10.3/epel
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/epel.repo
echo '
[mysql57-community]
name=MySQL 5.7 Community Server
baseurl=http://192.168.10.3/mysql57-community
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/mysql57-community.repo
echo '
[mysql-connectors-community]
name=MySQL Connectors Community
baseurl=http://192.168.10.3/mysql-connectors-community
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/mysql-connectors-community.repo
echo '
[mysql-tools-community]
name=MySQL Tools Community
baseurl=http://192.168.10.3/mysql-tools-community
path=/
enabled=1
gpgcheck=0
' > /etc/yum.repos.d/mysql-tools-community.repo
yum repolist all
yum clean all
rm -rf /var/cache/yum/*
yum makecache


# 安装MySQL5.7.33
yum -y install mysql-community-server
systemctl enable mysqld
systemctl start mysqld
systemctl status mysqld
echo 'skip-grant-tables' >> /etc/my.cnf
systemctl restart mysqld
mysql -e "FLUSH PRIVILEGES;ALTER user 'root'@'localhost' IDENTIFIED BY 'root';"
sed -i "s/skip-grant-tables//g" /etc/my.cnf
echo '
[mysql]
user=root
password=root
' > /root/.my.cnf
systemctl restart mysqld
mysql -e "USE mysql; UPDATE user SET host = '%' WHERE user = 'root'; FLUSH PRIVILEGES;"
systemctl stop mysqld
mv /var/lib/mysql/* /data
chown mysql:mysql -R /data
sed -i "s/datadir=\/var\/lib\/mysql/datadir=\/data/g" /etc/my.cnf
sed -i "s/socket=\/var\/lib\/mysql\/mysql\.sock/socket=\/data\/mysql\.sock/g" /etc/my.cnf
chown mysql:mysql -R /data
systemctl restart mysqld
firewall-cmd --add-port=3306/tcp
firewall-cmd --permanent --add-port=3306/tcp
systemctl restart firewalld
