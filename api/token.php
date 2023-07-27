<?php
include_once "config.php";



$bodyData = file_get_contents('php://input');

$data = json_decode($bodyData, true);


$token_no = $data['token-no'] ;
$email = $data['email'] ;

        $query = 
"UPDATE UserMobiles
SET FCMToken = '$token_no'
WHERE email = '$email'
";
    $sql = mysqli_query($conn, $query);
        if($sql){
            echo json_encode(array("status" => "Success", "data" => "Token Inserted"));
        }else{
            echo json_encode(['cant' => '$sql problem'. mysqli_error($conn)]);
        }


?>