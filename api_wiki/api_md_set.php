<?php


header('Access-Control-Allow-Origin: http://localhost:8080');
file_put_contents('./test.md', $_POST['md']);
file_put_contents('./test.md_parsed_highlight', $_POST['md_parsed_highlight']);
