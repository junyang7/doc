<?php


namespace App\Tools;


class Token
{


    public static function create($user_id, $ttl, $k32i16)
    {

        $user_id_36 = base_convert($user_id, 10, 36);
        $user_id_36_pad = str_pad($user_id_36, 10, 0, STR_PAD_LEFT);
        $time_36 = base_convert(time() + $ttl, 10, 36);
        $time_36_pad = str_pad($time_36, 7, 0, STR_PAD_LEFT);

        $k32 = substr($k32i16, 0, 32);
        $i16 = substr($k32i16, 32);

        $data = $user_id_36_pad . $time_36_pad;
        $aes_encrypted = Aes::encrypt($data, $k32, $i16);

        return [
            'content' => $user_id_36 . $aes_encrypted,
            'k32' => $k32,
            'i16' => $i16,
        ];

    }


    public static function verify($token, $k32i16)
    {

        $token_length = strlen($token);
        if($token_length < 45 || $token_length > 54)
        {
            return FALSE;
        }

        if($token_length < 54)
        {
            $token = str_pad($token, 54, 0, STR_PAD_LEFT);
        }

        $k32 = substr($k32i16, 0, 32);
        $i16 = substr($k32i16, -16);
        $aes_decrypted = Aes::decrypt(substr($token, 10), $k32, $i16);

        if(strncmp($aes_decrypted, $token, 10) !== 0)
        {
            return FALSE;
        }

        if(base_convert(substr($aes_decrypted, 10, 7), 36, 10) < time())
        {
            return FALSE;
        }

        return TRUE;

    }


}
