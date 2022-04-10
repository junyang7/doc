<?php


namespace App\Tools;


class Curl
{


    public static function get($url, $header = [], $timeout = 3, $user_agent = 'PF')
    {

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HTTPGET, TRUE);
        curl_setopt($ch, CURLOPT_POST, FALSE);
        curl_setopt($ch, CURLOPT_NOBODY, FALSE);
        curl_setopt($ch, CURLOPT_VERBOSE, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_TIMEOUT_MS, $timeout * 1000);
        curl_setopt($ch, CURLOPT_NOSIGNAL, TRUE);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT_MS, $timeout * 1000);
        curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        $response = curl_exec($ch);
        $error_code = curl_errno($ch);
        $error_text = curl_error($ch);
        $info = curl_getinfo($ch);
        curl_close($ch);

        i($error_code == 0, 'CURL执行异常', ['error_code' => $error_code, 'error_text' => $error_text, ]);
        i($info['http_code'] == 200, 'HTTP响应码非200', ['http_code' => $info['http_code'], 'response' => $response, ]);

        if(trim(strtolower($info['content_type'])) == 'application/json')
        {
            $response = json_decode($response, TRUE);
            i($response['code'] == 0, $response['info'], $response['data']);
            return $response['data'];
        }

        return $response;

    }


    public static function post($url, $data = [], $header = [], $timeout = 3, $user_agent = 'PF')
    {

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_HTTPGET, FALSE);
        curl_setopt($ch, CURLOPT_NOBODY, FALSE);
        curl_setopt($ch, CURLOPT_VERBOSE, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_TIMEOUT_MS, $timeout * 1000);
        curl_setopt($ch, CURLOPT_NOSIGNAL, TRUE);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT_MS, $timeout * 1000);
        curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        $response = curl_exec($ch);
        $error_code = curl_errno($ch);
        $error_text = curl_error($ch);
        $info = curl_getinfo($ch);
        curl_close($ch);

        i($error_code == 0, 'CURL执行异常', ['error_code' => $error_code, 'error_text' => $error_text, ]);
        i($info['http_code'] == 200, 'HTTP响应码非200', ['http_code' => $info['http_code'], 'response' => $response, ]);

        if(trim(strtolower($info['content_type'])) == 'application/json')
        {
            $response = json_decode($response, TRUE);
            i($response['code'] == 0, $response['info'], $response['data']);
            return $response['data'];
        }

        return $response;

    }


}
