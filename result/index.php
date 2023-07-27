<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    
    img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]{
    display: none;
}
    body{
        overflow: hidden;
      background-image: url(res/spratt-bg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100vw;
    }
    td{
        padding: 0px 15px;
    }
    .container, .form-container{
        display:flex;
        justify-content: center;
        align-items:center;
        flex-direction:column;
    }
    table{
background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 2px );
-webkit-backdrop-filter: blur( 2px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
transition:0.5s;
    }
    table:hover{
       box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); 
       border-top-right-radius: 35px;
    }
    </style>

</head>
<body>


<?php

// $lname = $_POST["lname"];
// $gender = $_POST["gender"];
// $mobile = $_POST["mobile"];
// $email = $_POST["email"];
// $address = $_POST["address"];
// $city = $_POST["city"];
// $hobby = $_POST["hobby"];
// $postal = $_POST["postal"];
// $dob = $_POST["dob"];

if(isset($_POST["Fname"])){
    $fname = $_POST["Fname"];
}
if(isset($_POST["lname"])){
    $lname = $_POST["lname"];
}
if(isset($_POST["gender"])){
    $gender = $_POST["gender"];
}

if(isset($_POST["mobile"])){
    $mobile = $_POST["mobile"];
}
if(isset($_POST["email"])){
    $email = $_POST["email"];
}
if(isset($_POST["address"])){
    $address = $_POST["address"];
}
if(isset($_POST["city"])){
    $city = $_POST["city"];
}
if(isset($_POST["hobby"])){
    $hobby = $_POST["hobby"];
}
if(isset($_POST["postal"])){
    $postal = $_POST["postal"];
}
if(isset($_POST["dob"])){
    $dob = $_POST["dob"];
}
if(isset($_POST["country"])){
    $country = $_POST["country"];
}

if(empty($fname)){
    $fname = "Not Inserted 🙁";
}
if(empty($lname)){
    $lname = "Not Inserted 🙁";
}

if(empty($gender)){
    $gender = "Not Inserted 🙁";
}
if(empty($mobile)){
    $mobile = "Not Inserted 🙁";
}
if(empty($email)){
    $email = "Not Inserted 🙁";
}
if(empty($address)){
    $address = "Not Inserted 🙁";
}
if(empty($city)){
    $city = "Not Inserted 🙁";
}
if(empty($postal)){
    $postal = "Not Inserted 🙁";
}
if(empty($dob)){
    $dob = "Not Inserted 🙁";
}
if(empty($hobby)){
    $hobby = "Not Inserted 🙁";
}
if(empty($country)){
    $country = "Not Inserted 🙁";
}


?>
<div class="container">
    <h1>As Our Records</h1>
    <p>Your Details are</p>
</div>
<div class="form-container">
<table>
    <tr>
        <td>Name is:</td>
        <td><p><?php echo "$fname $lname" ?></p></td>
    </tr>
    <tr>
        <td>Gender is:</td>
        <td><p><?php echo "$gender" ?></p></td>
    </tr>
    <tr>
        <td>Mobile no is:</td>
        <td><p><?php echo "$mobile" ?></p></td>
    </tr>
    <tr>
        <td>Email is:</td>
        <td><p><?php echo "$email" ?></p></td>
    </tr>
    <tr>
        <td>Address is:</td>
        <td><p><?php echo "$address" ?></p></td>
    </tr>
    <tr>
        <td>Village is:</td>
        <td><p><?php echo "$city" ?></p></td>
    </tr>

    <tr>
        <td>Postal Code is:</td>
        <td><p><?php echo "$postal" ?></p></td>
    </tr>
    <tr>
        <td>Date of Birth is:</td>
        <td><p><?php echo "$dob" ?></p></td>
    </tr>
</table>
</div>

</body>
</html>