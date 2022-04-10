<?php


namespace App\Controllers;


use App\Entries\EntryDocument;
use PF\Cores\Request;


class ControllerDocument
{


    public function add(Request $request)
    {

        $title = $request->post('title', '');
        $content = $request->post('content', '');
        $pid = (int)$request->post('pid', 0);
        $ranking = (int)$request->post('ranking', 0);

        i(!empty($title), ERROR_PARAMETER, ['title' => $title, ]);
        i($pid > 0, ERROR_PARAMETER, ['pid' => $pid, ]);
        i($ranking > 0, ERROR_PARAMETER, ['ranking' => $ranking, ]);

        $res = EntryDocument::add($title, $content, $pid, $ranking);
        return $res;

    }


    public function set(Request $request)
    {

        $document_id = (int)$request->post('document_id', 0);
        $document_title = $request->post('document_title', '');
        $document_content = $request->post('document_content', '');

        i($document_id > 0, ERROR_PARAMETER, ['document_id' => $document_id, ]);
        i(!empty($document_title), ERROR_PARAMETER, ['document_title' => $document_title, ]);

        $res = EntryDocument::set($document_id, $document_title, $document_content);
        return $res;

    }


}
