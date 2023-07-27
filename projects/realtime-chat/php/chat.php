<?php

session_start();
include_once "config.php";
$msg = mysqli_real_escape_string($conn, $_POST["msg"]);
$incoming = mysqli_real_escape_string($conn, $_POST["incoming"]);
$outgoing = mysqli_real_escape_string($conn, $_POST["outgoing"]);

$date = date('m/d/Y h:i:s a', time());


if(!empty($msg) && !empty($incoming) && !empty($outgoing)){

    $sql = mysqli_query($conn, "INSERT INTO msg (msg_content, incoming_id, outgoing_id, time)
                                          VALUES ('{$msg}', '{$incoming}', '{$outgoing}', '{$date}')");
    if($sql){
        echo json_encode(array("status"=>"success", "msg"=>"Inserted Successfully", "data"=> $msg));
    }                                      
}else{
    echo json_encode(array("status"=>"error", "msg"=>"Fields Must not be empty"));
}







?>