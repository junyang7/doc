<?php


namespace App\Middlewares;


class Cors
{


    public static function before($response)
    {

        header('Access-Control-Allow-Origin: http://localhost:8080');
        return $response;

    }


}
