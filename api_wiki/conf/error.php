<?php


define('ERROR', -1);
define('SERVICE_EXCEPTION', 1);
define('REQUIRE_LOGIN', 2);
define('ERROR_PARAMETER', 3);


return [
    ERROR => '错误',
    SERVICE_EXCEPTION => '服务器繁忙，请稍后再试',
    REQUIRE_LOGIN => '登录已过期，请重新登录',
    ERROR_PARAMETER => '参数错误',
];
