<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');
    $_DATA = (object) [
        "accept" => apache_request_headers()["accept"]
    ];
    if($_DATA->accept == "CrearMenu"){
        $_DATA->plantilla = <<<HTML
            <ul>
                <li><a href="">a</a></li>
                <li><a href="">b</a></li>
                <li><a href="">c</a></li>
                <li><a href="">d</a></li>
            </ul>
        HTML;
    }
    else if($_DATA->accept == "CrearSection"){
        $_DATA->plantilla = <<<TEXTO
            Miguel amet consectetur adipisicing elit. Earum maiores, odit, obcaecati illo ab alias aperiam inventore sed reprehenderit non iusto odio perferendis qui possimus quas reiciendis rem delectus ipsam!
        TEXTO;
    };
    

    echo json_encode($_DATA->plantilla, JSON_PRETTY_PRINT);
?> 