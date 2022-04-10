#!/usr/bin/env bash


curl -O https://www.php.net/distributions/php-7.4.27.tar.gz
tar -zxvf php-7.4.27.tar.gz
cd php-7.4.27/ext/pcntl
phpize
./configure
make
make test
sudo make install
echo 'extension=pcntl.so' | sudo tee -a /usr/local/etc/php/7.4/php.ini
php -m | grep pcntl
