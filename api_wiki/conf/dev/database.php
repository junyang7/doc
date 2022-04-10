<?php


return [
    'database_list' => [
        0 => [
            'driver' => 'mysql',
            'host' => 'rm-2ze4zvnwb4llj7n519o.mysql.rds.aliyuncs.com',
            'port' => '3306',
            'database' => 'document',
            'username' => 'guojunyang',
            'password' => 'a9^7Mra%$l!Y7I8v-g!n9I^mCANuU$4*',
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_general_ci',
        ],
        1 => [
            'driver' => 'mysql',
            'host' => 'rm-2ze4zvnwb4llj7n519o.mysql.rds.aliyuncs.com',
            'port' => '3306',
            'database' => 'passport',
            'username' => 'guojunyang',
            'password' => 'a9^7Mra%$l!Y7I8v-g!n9I^mCANuU$4*',
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_general_ci',
        ],
    ],
    'table_list' => [
        'document' => [
            'database' => 0,
            'table' => 'document',
        ],
        'user' => [
            'database' => 1,
            'table' => 'user',
        ],
    ],
];
