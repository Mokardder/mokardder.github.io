<?php
include_once "config.php";



$bodyData = file_get_contents('php://input');

$data = json_decode($bodyData, true);

$email = $data['email'];
$MobileName = $data['MobileName'];
$userID = $data['UniqueID'];
$lastActive = $data['LastActive'];


if(!empty($email)){
    
    $sql = "SELECT * FROM UserMobiles WHERE email = '$email'";
   $query = mysqli_query($conn, $sql);
   
    if(mysqli_num_rows($query) > 0){
        $row = mysqli_fetch_assoc($query);
       $Mobile= $row['MobileName'];
       $UserID = $row['UserID'];

       echo json_encode(array("status" => "LoggedIn", "email" => $email, "userID" => "$UserID"));
    }else{
    
    $sql2 = "INSERT INTO UserMobiles (UserID, email, MobileName, LastActive) VALUES ('$userID', '$email', '$MobileName', '$lastActive')";

   $query2 = mysqli_query($conn, $sql2);
   
if($query2){

echo json_encode(array("status" => "Account Created", "Type" => "Created"));
   }else{
       echo json_encode(array("status" => "Account Creation Failed", "Type" => "Failed ". mysqli_error($conn)));
   }
   }

}else{
    echo json_encode(array("status" => "Failed", "Type" => ""));
}




?>