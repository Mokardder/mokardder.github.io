<?php 

$conn = mysqli_connect("www.db4free.net", "mokardder", "9932896502", "mokardder");

if(!$conn){
    echo "Database Error" . mysqli_connect_error();
}

?>