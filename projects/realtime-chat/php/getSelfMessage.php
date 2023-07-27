<?php

session_start();
include_once "config.php";

$incoming = mysqli_real_escape_string($conn, $_POST["incoming"]);


if(!empty($incoming)){
    $sql = mysqli_query($conn, "SELECT * FROM msg WHERE incoming_id = '{$incoming}'");
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