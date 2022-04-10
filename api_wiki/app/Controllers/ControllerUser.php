<?php


namespace App\Controllers;


use App\Entries\EntryUser;
use PF\Cores\Request;


class ControllerUser
{


    public function login(Request $request)
    {

        $user_name = $request->post('user_name', '');
        $user_password = $request->post('user_password', '');

        i(!empty($user_name), '参数错误：user_name');
        i(!empty($user_password), '参数错误：user_password');

        $res = EntryUser::login($user_name, $user_password);
        return $res;

    }


}
