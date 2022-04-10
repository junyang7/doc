#!/usr/bin/env bash


sudo cp /etc/php.ini.default /etc/php.ini
curl -O https://pear.php.net/go-pear.phar


sudo php -d detect_unicode=0 go-pear.phar
# 选择：1
/usr/local/pear
# 选择：4
/usr/local/bin
# 回车安装


pear version
sudo pear config-set php_ini /usr/local/etc/php/7.4/php.ini
sudo pecl channel-update pecl.php.net


# 测试
pecl search redis
brew install autoconf
sudo pecl install redis
php -m | grep redis
