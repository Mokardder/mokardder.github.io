<?php

include_once "config.php";
$fname = mysqli_real_escape_string($conn, $_POST["fname"]);
$lname = mysqli_real_escape_string($conn, $_POST["lname"]);
$email = mysqli_real_escape_string($conn, $_POST["email"]);
$pass = mysqli_real_escape_string($conn, $_POST["pass"]);

if(!empty($fname) && !empty($lname) && !empty($email) && !empty($pass) ){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $sql = mysqli_query($conn, "SELECT email FROM users WHERE email = '{$email}'");
        if(mysqli_num_rows($sql) > 0){
            echo "This Email Already Exist";
        }else{
            $status = "Active Now";
            $random_id = rand(time(), 10000000);

            $sql2 = mysqli_query($conn, "INSERT INTO users (unique_id, fname, lname, email, password, status)
                                                     VALUES ({$random_id}, '{$fname}', '{$lname}', '{$email}', '{$pass}', '{$status}')");
            if($sql2){
                $sql3 = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}'");
                if(mysqli_num_rows($sql3) > 0){
                    $row = mysqli_fetch_assoc($sql3);
                    $_SESSION['unique_id'] = $row['unique_id'];
                    echo "Success";
                }
            }                                         
        }

    }else{
        echo "$email - is not a valid email";
    }

}else{
    echo "All Input Fields are Required";
}



?>