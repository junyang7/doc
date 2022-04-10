<?php


namespace Pf\Tool;


class Rsa
{


    public static function encodeByPub($data, $public_key)
    {

        i(openssl_public_encrypt($data, $encrypted, $public_key) === TRUE);
        return base64_encode($encrypted);

    }


    public static function decodeByPub($data, $public_key)
    {

        i(openssl_public_decrypt(base64_decode($data), $decrypted, $public_key) === TRUE);
        return $decrypted;

    }


    public static function encodeByPri($data, $private_key)
    {

        i(openssl_private_encrypt($data, $encrypted, $private_key) === TRUE);
        return base64_encode($encrypted);

    }


    public static function decodeByPri($data, $private_key)
    {

        i(openssl_private_decrypt(base64_decode($data), $decrypted, $private_key) === TRUE);
        return $decrypted;

    }


    public static function generate($configure = ['digest_alg' => 'SHA512', 'private_key_bits' => 4096, ])
    {

        $key = openssl_pkey_new($configure);
        i($key !== FALSE);
        i(openssl_pkey_export($key, $pri) === TRUE);
        $det = openssl_pkey_get_details($key);
        i($det !== FALSE);
        return [
            'pub' => $det['key'],
            'pri' => $pri,
        ];

    }


}
