<?php

    include("config/db_connect.php");

    
    $pizza = null;
    $title = $email = $ingredients = "";
    $errors = ["email" => "", "title" => "", "ingredients" => ""];
    $id = 0;

    if(isset($_POST["id_to_update"])){
        $id = mysqli_real_escape_string($conn, $_POST["id_to_update"]);

        $SQL = "SELECT * FROM pizzas WHERE id = $id";

        $result = mysqli_query($conn, $SQL);

        $pizza = mysqli_fetch_assoc($result);

        // mysqli_free_result($result);
        // mysqli_close($conn);

    }

    if(isset($_POST["submit"])){
        
        	// check email
		if(empty($_POST["email"])){
			$errors["email"] =  "An email is required <br />";
		} else{
			$email = $_POST["email"];
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors["email"] = "Email must be a valid email address";
            }
		}

		// check title
		if(empty($_POST["title"])){
			$errors["title"] =  "A title is required <br />";
		} else{
			$title = $_POST["title"];
            if(!preg_match("/^[a-zA-Z\s]+$/", $title)){
				$errors["title"] =  "Title must be letters and spaces only";
			}
		}

		// check ingredients
        if(empty($_POST["ingredients"])){
			$errors["ingredients"] =  "At least one ingredient is required <br />";
		} else{
			$ingredients = $_POST["ingredients"];
			if(!preg_match("/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/", $ingredients)){
				$errors["ingredients"] =  "Ingredients must be a comma separated list";
			}
		}


        if(!array_filter($errors))
		{
            
            $email = mysqli_real_escape_string($conn, $_POST["email"]);
            $title = mysqli_real_escape_string($conn, $_POST["title"]);
            $ingredients = mysqli_real_escape_string($conn, $_POST["ingredients"]);
           
            $SQL = "UPDATE pizzas SET title = '$title', email = '$email', ingredients = '$ingredients' WHERE id = $id";


            // save the data to db
            if(mysqli_query($conn, $SQL)) {
                 header("Location: index.php");
            } 
            else {
                echo "Query error: " . mysqli_error;
            }
		}

    }


?>

<!DOCTYPE html>
<html lang="en">

<?php include('templates/header.php'); ?>

<div class="container center gray-text">
    <?php if($pizza){
        $email = $pizza["email"];
        $ingredients = $pizza["ingredients"];
        $title = $pizza["title"];
        ?>

    <h4 class="center">Update a Pizza</h4>
    <form class="white" action="update.php" method="POST">

        <!-- email start -->
        <label>Your Email</label>
        <input type="text" name="email" value="<?php echo htmlspecialchars ($email); ?>">
        <div class="red-text"> <?php echo $errors["email"] ?> </div>
        <!-- email end -->

        <!-- pizza title start -->
        <label>Pizza Title</label>
        <input type="text" name="title" value="<?php echo htmlspecialchars($title); ?>">
        <div class="red-text"> <?php echo $errors["title"] ?> </div>
        <!-- pizza title end -->

        <!-- Ingredients start -->
        <label>Ingredients (comma separated)</label>
        <input type="text" name="ingredients" value="<?php echo htmlspecialchars ($ingredients); ?>">
        <div class="red-text"> <?php echo $errors["ingredients"] ?> </div>
        <!-- Ingredients end -->



        <div class="center">
            <input type="hidden" name="id_to_update" value="<?php echo $pizza["id"]; ?>">
            <input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
        </div>

    </form>


    <?php } else { ?>
    <h5>No such pizza exists!</h5>
    <?php } ?>

</div>

<?php include('templates/footer.php'); ?>

</html>