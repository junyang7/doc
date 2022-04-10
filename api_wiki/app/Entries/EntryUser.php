<?php


namespace App\Entries;


use App\Models\ModelUser;


class EntryUser
{


    public static function login($user_name, $user_password)
    {

        $user = ModelUser::getInstance()->field('user_id,user_password_hash')->get('user_name = ?', [$user_name, ]);
        i(!empty($user), '用户不存在');
        i(password_verify($user_password, $user['user_password_hash']), '用户名或密码不正确');

        $datetime = date('Y-m-d H:i:s');
        $user_password_hash = password_hash($user_password, PASSWORD_DEFAULT);
        $row = [];
        $row['update_time'] = $datetime;
        $row['user_password_hash'] = $user_password_hash;
        ModelUser::getInstance()->set($row, 'user_id = ?', [$user['user_id'], ]);

        // 生成cookie
        return $user;

    }


}
