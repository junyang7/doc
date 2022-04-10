<?php


namespace App\Controllers;


use App\Entries\EntryDocument;
use PF\Cores\Request;


class ControllerContent
{


    public function get(Request $request)
    {

        $document_id = (int)$request->get('document_id', 0);
        i($document_id > 0, ERROR_PARAMETER, ['document_id' => $document_id, ]);
        $res = EntryDocument::get('id,content', $document_id);
        return $res;

    }


}
