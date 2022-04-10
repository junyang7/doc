<?php


namespace Pf\Tool;


class RandomString
{


    public static function generate($length = 32, $hash = FALSE, $char_list = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm`[];\',./~{}:"<>?', $char_list_length = 77, $hash_length = 127)
    {

        $random_string = '';
        for($i = 0; $i < $length; $i ++)
        {
            $random_string .= $char_list[random_int(0, $char_list_length)];
        }
        if(!$hash)
        {
            return $random_string;
        }
        $hash = hash('sha512', $random_string);
        $random_hash = '';
        for($i = 0; $i < $length; $i ++)
        {
            $random_hash .= $hash[random_int(0, $hash_length)];
        }
        return $random_hash;

    }


}



echo RandomString::generate(32, FALSE) . PHP_EOL;
