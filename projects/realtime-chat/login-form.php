<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
   <div class="wrapper">
    <header>Real Time Chat App</header>
    <div class="login-container">
        <form action="#" method="get">
        <div class="field">
            <label for="Email">Email</label>
            <input type="email" name="email" required>
        </div>
        <div class="field">
            <label for="pass">Password</label>
            <input type="password" name="pass" required>
        </div>
        <div class="field">
            <input class="continueBtn" type="submit" value="Login">
        </div>
    </form>
        <div class="field login">
            <a href="index.php">Don't have a account ? Sign Up</a>
        </div>
    </div>
   </div>
   <script src="js/login.js"></script>
</body>
</html>