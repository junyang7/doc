<?php


namespace App\Controllers;


use App\Entries\EntryDocument;
use PF\Cores\Request;


class ControllerTitle
{


    public function getList(Request $request)
    {

        $res = EntryDocument::getList();
        return $res;

    }


}
