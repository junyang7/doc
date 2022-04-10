<?php


namespace App\Controllers;


use App\Tools\Aes;
use App\Tools\RandomString;

class ControllerIndex
{


    public function index()
    {

//        $k32 = RandomString::generate(32, TRUE);
//        $k16 = RandomString::generate(16, TRUE);

        $data = [
            'user_id' => 1,
            'ttl' => time() + 1 * 60 * 60 * 24,
        ];

        return [
            '$k32' => K32,
            '$k16' => I16,
            'cookie1' => Aes::encrypt(
                json_encode($data),
                K32,
                I16
            ),
            'cookie2' => Aes::encrypt(
                'login',
                K32,
                I16
            ),
        ];

    }


}
