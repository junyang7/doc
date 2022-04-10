<?php


namespace App\Entries;


use App\Services\ServiceDocument;


class EntryDocument
{


    public static function add($title, $content, $pid, $ranking)
    {

        $datetime = date('Y-m-d H:i:s');

        try
        {
            $document_id = ServiceDocument::add($datetime, $title, $content, $pid, $ranking);
        }
        catch(\Exception $exception)
        {
            var_dump($exception);
            i(FALSE, ERROR);
            exit();
        }

        $res = [];
        $res['document_id'] = $document_id;
        return $res;

    }


    public static function getList()
    {

        $document_list = ServiceDocument::getList('id,title,content,pid,ranking');

        $res = [];
        $res['document_list'] = $document_list;
        return $res;

    }


    public static function get($field_list_string, $document_id)
    {

        $document = ServiceDocument::get($field_list_string, $document_id);

        $res = [];
        $res['document'] = $document;
        return $res;

    }


    public static function set($document_id, $document_title, $document_content)
    {

        $datetime = date('Y-m-d H:i:s');

        try
        {
            $document_id = ServiceDocument::set($datetime, $document_id, $document_title, $document_content);
        }
        catch(\Exception $exception)
        {
            var_dump($exception);
            i(FALSE, ERROR);
            exit();
        }

        $res = [];
        $res['document_id'] = $document_id;
        return $res;

    }


}
