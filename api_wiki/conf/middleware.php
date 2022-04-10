<?php


use App\Middlewares\Cors;
use App\Middlewares\LoggedIn;


return [
    'cors' => Cors::class,
    'logged_in' => LoggedIn::class,
];
