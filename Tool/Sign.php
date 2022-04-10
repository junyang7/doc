<?php


namespace Pf\Tool;


class Sign
{


    const WHITE = 1;
    const BLACK = 2;


    public static function get($data_list, $type = 'md5', $key = '', $filter_type = self::BLACK, $filter_k_list = ['sign', 'sign_type', ], $filter_v_list = ['', ])
    {

        switch($type)
        {
            case 'md5':
            default:
                return self::md5($data_list, $key, $filter_type, $filter_k_list, $filter_v_list);
        }

    }


    private static function md5($data_list, $key, $filter_type, $filter_k_list, $filter_v_list)
    {

        if($filter_type === self::BLACK)
        {
            foreach($data_list as $k => $v)
            {
                if(in_array($k, $filter_k_list, true) || in_array($v, $filter_v_list, true))
                {
                    unset($data_list[$k]);
                }
            }
        }
        if($filter_type === self::WHITE)
        {
            foreach($data_list as $k => $v)
            {
                if(!in_array($k, $filter_k_list, true) || !in_array($v, $filter_v_list, true))
                {
                    unset($data_list[$k]);
                }
            }
        }
        ksort($data_list);
        $parameter = [];
        foreach($data_list as $k => $v)
        {
            $parameter[] = $k . '=' . trim($v);
        }
        $string = implode('&', $parameter) . $key;
        return md5($string);

    }


}
