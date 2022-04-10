<?php


namespace App\Services;


use App\Models\ModelDocument;


class ServiceDocument
{


    public static function add($datetime, $title, $content, $pid, $ranking)
    {

        $row = [];
        $row['add_time'] = $row['set_time'] = $datetime;
        $row['title'] = $title;
        $row['content'] = $content;
        $row['pid'] = $pid;
        $row['ranking'] = $ranking;
        return ModelDocument::getInstance()->add($row);

    }


    public static function getList($field_list_string)
    {

        return ModelDocument::getInstance()->field($field_list_string)->getList();

    }


    public static function get($field_list_string, $document_id)
    {

        return ModelDocument::getInstance()->field($field_list_string)->get('id = ?', [$document_id, ]);

    }


    public static function set($datetime, $document_id, $document_title, $document_content)
    {

        $row = [];
        $row['set_time'] = $datetime;
        $row['title'] = $document_title;
        $row['content'] = $document_content;
        return ModelDocument::getInstance()->set($row, 'id = ?', [$document_id, ]);

    }


}
