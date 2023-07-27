<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Chat App</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <div class="wrapper">
        <div class="form-container">
            <header>Realtime Chat App</header>
            <section class="form-signup">
                <form action="#">
                    <div class="infotxt">Error Text</div>
                    <div class="name-details">
                    <div class="field">
                        <label for="fname">First Name</label>
                        <input id="fname" type="text" name="fname" id="" required>
                    </div>
                    <div class="field">
                        <label for="sname">Second Name</label>
                        <input id="sname" type="text" name="lname" id="" required>
                    </div>
                </div>
                    <div class="field">
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email" id="" required>
                    </div>
                    <div class="field">
                        <label for="pass">Password</label>
                        <input id="pass" type="password" name="pass" id="" required>
                    </div>
                    <div class="field">
                        <input class="continueBtn" type="submit" name="" value="Continue to Chat" id="">
                    </div>
                    <div class="field login">
                        <a href="login-form.php">Already Signed Up? Login Here</a>
                    </div>
                
                </form>
            </section>
        </div>
    </div>
    <script src="js/sign-up.js"></script>
</body>
</html>