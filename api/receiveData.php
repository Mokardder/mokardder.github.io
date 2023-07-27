<?php
include_once "config.php";



$bodyData = file_get_contents('php://input');

$data = json_decode($bodyData, true);

$time = $data['date'] ;
$battery = $data['battery']  ;
$email = $data['email'] ;
$token_no = $data['token-no'] ;
$isScreenOn = $data['isScreenOn'] ;
$type = $data['type'] ;
$version = $data['Version'] ;

$sql = "
UPDATE UserMobiles
SET LastActive = '$time', BatteryLevel= '$battery', isScreenOn = '$isScreenOn', Version = '$version'
WHERE email = '$email'
";



if(!empty($time && $battery && $email)){
    $query = mysqli_query($conn, $sql);
    
    if($query){

        echo json_encode(array("status" => "Success", "data" => "$time $battery $email"));
    }else{
        echo json_encode(['success' => 'Image uploaded successfully.']);
    }
}else{
    echo json_encode(['failer' => 'battery eroor']);
}





?>