<?php
include_once "config.php";


$bodyData = file_get_contents('php://input');

$data = json_decode($bodyData, true);

$date = $data['date'];
$data = $data['data'];

if(!empty($data && $date)){
    echo json_encode(array("status" => "Success"));
}else{
    echo json_encode(array("status" => "Failed"));
}



?>