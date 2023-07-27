<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eid Mubarak</title>
    <style>




        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]{
    display: none;
}
   
        * {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
        }

        body {
            overflow: hidden;
        }

        .container {
            background-image: url(eid_bg.jpg);
            background-repeat: no-repeat;
            background-position: 40%;
            background-size: cover;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            background-color: #222;
            gap: 20px;
        }

        .name-container {
            height: 10rem;
            width: 20rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2.3px);
            -webkit-backdrop-filter: blur(2.3px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            z-index: 2;
        }



        .wrap {
            position: relative;
        }


        .lampC {
            position: absolute;
            height: 90px;
            top: -20px;
            left: -50px;
            z-index: 5;
            animation-name: moonAnimateC;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            z-index: 2;
            /* box-shadow: rgba(17, 17, 26, 0.685) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px; */
        }

        .lampD {

            height: 70px;
            bottom: -90px;
            right: -20px;
            position: absolute;
            z-index: 15;
            animation-name: moonAnimateD;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            z-index: 1;
        }

        .bt {
            background-image: url(https://blackmod.net/styles/images/mod.gif);
            color: #72e6ff;
            font-weight: 700;
            padding: 5px 8px;
            background-repeat: repeat;
            background-position: center;
            text-align: center;
            color: #ffffff;
            font-size: 20px;
        }

        .name {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .count {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            gap: 20px;
        }

        .b-text {
            text-align: center;
            color: white;
        }

        .bg-time {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 5%;
            height: 50px;
            /* width: 50px; */
            background: rgba(255, 255, 255, 0.04);
            border-radius: 8px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 25px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2.3px);
            -webkit-backdrop-filter: blur(2.3px);
            border: 1px solid rgba(255, 255, 255, 0.3);

            z-index: 4;
        }

        .form {
            position: absolute;
            bottom: 40px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 15px;
        }

        form input {
            color: white;
            outline: none;
            background-color: transparent;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 8px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 25px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2.3px);
            -webkit-backdrop-filter: blur(2.3px);
            border: 1px solid rgba(255, 255, 255, 0.3);

        }

        form input::placeholder {
            color: white;

        }

        .formbutton {
            background-color: transparent;
            outline: none;
            border: 1px solid white;
            padding: 5px 10px;
            color: white;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 8px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 25px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2.3px);
            -webkit-backdrop-filter: blur(2.3px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            cursor: pointer;

        }
        .share{
            margin-top: 20px;
        }

        span {
            color: white;
        }

        @keyframes moonAnimateC {
            0% {
                top: -40px;
            }

            100% {
                top: -20px;
            }
        }

        @keyframes moonAnimateD {
            0% {
                bottom: -20px;
            }

            100% {
                bottom: -30px;
            }
        }
        
        
        @media only screen and (max-width: 600px) {
    .count {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;
        }
 .container {
     margin-top: -90px;
    background-position: 40%;
    padding: 5%;
}
.form{
    bottom: 20px;
}
.lampC {
    left: -20px;
}
}

    </style>
</head>

<body>
    <?php 
    
    if(isset($_GET["username"])){
        $username = $_GET["username"];
    }
    
    if(empty($username)){
        $username = "Mokardder[DEV]";
    }
    ?>
    <div class="container">
        <div class="count">
            <div class="days bg-time">
                <h2 class="b-text" id="day">0</h2>
                <span>Days</span>
            </div>
            <div class="hours bg-time">
                <h2 class="b-text" id="hours">0</h2>
                <span>Hours</span>
            </div>
            <div class="minute bg-time">
                <h2 class="b-text" id="mins">0</h2>
                <span>Minutes</span>
            </div>
            <div class="hours bg-time">
                <h2 class="b-text" id="sec">0</h2>
                <span>Seconds</span>
            </div>

        </div>
        <div class="wrap">
            <img class="lampC" src="eid-logo.png" alt="">
            <img class="lampD" src="eid-logo2.png" alt="">
            <div class="red-ball"></div>
            <div class="name-container">
                <div class="name">
                    <h1 class="heyy bt">In Advance</h1>
                    <h1 class="heyy bt">Happy Eid Muabarak</h1>
                    <h1 id="name" class="name bt"><?php echo "$username" ?></h1>
                </div>
            </div>

        </div>
        <div class="form">
           
            <form action="index.php" method="get">
                <input type="text" required name="username" placeholder="Enter Your Name" id="">
                <button class="formbutton" type="submit">GO</button>
            </form>
             <a id="wpshare" href="#"><button  class="formbutton share" type="submit">Share With Friends</button></a>
        </div>
    </div>
    <script src="app.js"></script>

</body>

</html>