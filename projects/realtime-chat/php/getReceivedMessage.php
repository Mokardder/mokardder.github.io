<?php
session_start();
include_once "config.php";



$outgoing = mysqli_real_escape_string($conn, $_POST["outgoing"]);
$incoming = mysqli_real_escape_string($conn, $_POST["incoming"]);


if(!empty($outgoing)){
    $query = "SELECT * FROM msg WHERE (outgoing_id = '{$outgoing}' AND incoming_id = '{$incoming}')
    OR (outgoing_id = '{$incoming}' AND incoming_id = '{$outgoing}') ORDER BY msg_id";
    $sql = mysqli_query($conn , $query);
    if($sql){
        if(mysqli_num_rows($sql) > 0){
            $data = array();
            while($row = mysqli_fetch_assoc($sql)){
                array_push($data, $row);
            }
            echo json_encode($data);
        }else{
            json_encode("No Messages");
        }
    }else{
        echo json_encode("Sql Query unable to run");
    }


}else{
    echo json_encode(array("status"=>"error", "type"=>"incoming id unavailable"));
}




?>