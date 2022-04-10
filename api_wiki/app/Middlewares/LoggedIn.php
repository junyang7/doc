<?php


namespace App\Middlewares;


use PF\Cores\Log;
use PF\Tools\Curl;


class LoggedIn
{


    public static function before($request)
    {

        if(isset($_SERVER['HTTP_AUTHORIZATION']))
        {
            if(preg_match('/^Basic\s([A-Za-z0-9\+\/=]+)$/', $_SERVER['HTTP_AUTHORIZATION'], $match))
            {
                $basic = base64_decode($match[1]);
                $index = strpos($basic, ':');
                $username = substr($basic, 0, $index);
                $password = substr($basic, $index + 1);
                if(!empty($username) && !empty($password))
                {
                    if($username == 'guojunyang' && $password == '1314e1')
                    {
                        header('HTTP/1.0 200 OK');
                        header('Connection:keep-alive');
                        return $request;
                    }
                }
//                {
//                    try
//                    {
//                        Curl::post(API_AUTH_BASIC, ['user_name' => $user_name, 'user_password' => $user_password, ]);
//                        header('HTTP/1.0 200 OK');
//                        header('Connection:keep-alive');
//                        return $request;
//                    }
//                    catch(\Exception $exception)
//                    {
//                        Log::exception('鉴权操作异常', $exception->getTrace());
//                    }
//                }
            }
        }
        header('HTTP/1.0 401 Unauthorized');
        header('WWW-Authenticate: Basic realm="all"');
        exit();

    }


}
