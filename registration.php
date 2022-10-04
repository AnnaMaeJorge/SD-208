<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            display: grid;
            height: 100%;
            width: 100%;
            place-items: center;
            background-image: url(https://media0.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif);
        }

        form .form-handler {
            float: right;
            height: 50%;
            position: relative;
            font-size: 25px;
            padding-top: 10px;
        }

        .form-handler {
            color: #000;
        }

        .container {
            border-radius: 15px;
            display: flex;
            width: 50%;
            height: 100%;
            background-image: url(https://i.pinimg.com/originals/f4/7f/d8/f47fd896add554744b4114d964b61b41.gif);
            text-align: justify;
            padding-top: 7%;
            padding-bottom: 3%;
            margin-top: 10%;
            justify-content: center;
            margin-top: 12%;
        }
    </style>
</head>
<body>
    <div class="container">
        <form class="form-handler">
            <?php

            $alert = "<script>alert('You have sucessfully registered!');</script>";
            echo $alert;
            echo "<h1>Good Day! Welcome to My Website!</h1>" . '<br />' . '<br />';
            $firstname = $_POST["firstname"];
            echo "Welcome!  $firstname ";
            $lastname = $_POST["lastname"];
            echo $lastname . ".";
            $address = $_POST['address'];
            echo "You are currently residing at $address." . "" . '<br />';
            $email = $_POST['emailaddress'];
            echo "Your email address is $email ";
            $password = $_POST['password'];
            echo  "and your password is  $password ." . "" . '<br />';
            echo "Please remember your given information to login in this site" . '<br />';
            echo "Good Day!" . '<br />';

            ?>


        </form>
    </div>
</body>

</html>