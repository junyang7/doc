<?php


namespace Pf\Tool;


class Aes
{


    public static function encrypt($data, $k32, $i16)
    {

        $encrypted = openssl_encrypt($data, 'AES-256-CBC', $k32, OPENSSL_RAW_DATA, $i16);
        i($encrypted !== FALSE);
        return base64_encode($encrypted);

    }


    public static function decrypt($data, $k32, $i16)
    {

        $decrypted = openssl_decrypt(base64_decode($data), 'AES-256-CBC', $k32, OPENSSL_RAW_DATA, $i16);
        i($decrypted !== FALSE);
        return $decrypted;

    }


}
