<?php
include_once "config.php";
session_start();
$sql = mysqli_query($conn, "SELECT * FROM users");
$datas = array();
if(mysqli_num_rows($sql) >= 0){
    while($row = mysqli_fetch_assoc($sql)){
        array_push($datas, $row);
    }
}
echo json_encode($datas);

?>