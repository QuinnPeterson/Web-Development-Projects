<?php

require ("user_validator.php");


if(isset( $_POST["submit"])){
    $validation = new UserValidator($_POST);

    $errors = $validation->validateForm();

    
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP OOP</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="new-user">
        <h2>Create a new User</h2>
        <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">

            <label for="username">Username:</label>
            <input type="text" name="username" value="<?php echo htmlspecialchars($_POST["username"]) ?? ""; ?>">
            <div class="error">
                <?php echo $errors["username"] ?? ""; ?>
            </div>

            <label for="email">Email:</label>
            <input type="text" name="email" id="email" value="<?php echo htmlspecialchars($_POST["email"]) ?? ""; ?>">
            <div class="error">
                <?php echo $errors["email"] ?? ""; ?>
            </div>
            <input type="submit" value="submit" name="submit">
        </form>
    </div>

</body>

</html>