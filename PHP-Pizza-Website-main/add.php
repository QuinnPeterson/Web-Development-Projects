<?php 
    include("config/db_connect.php");

    $title = $email = $ingredients = "";
    $errors = ["email" => "", "title" => "", "ingredients" => "", "noDuplicates" => ""];
    $dup = false;

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

            // Check if any duplicates 
            $result = mysqli_query($conn, "SELECT * FROM pizzas WHERE title = '$title'");
            if (!$result) {
                die($mysqli->error);
              }
              if ($result->num_rows > 0) {
                $errors["noDuplicates"] = "This pizza already exists!";
                $dup === true;
             }
             else{
                $dup === false;
             }
             mysqli_free_result($result);
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
                if($dup === false)
                {
                    $email = mysqli_real_escape_string($conn, $_POST["email"]);
                    $title = mysqli_real_escape_string($conn, $_POST["title"]);
                    $ingredients = mysqli_real_escape_string($conn, $_POST["ingredients"]);
                    
                    $SQL = "INSERT INTO pizzas(title, email, ingredients) VALUES('$title', '$email', '$ingredients')";

                    // save the data to db
                    if(mysqli_query($conn, $SQL)) {
                     header("Location: index.php");
                    } 
                    else {
                        echo "Query error: " . mysqli_error($conn);
                    }

                }
            }

	} // end POST check



	
?>

<!DOCTYPE html>
<html>

<?php include('templates/header.php'); ?>

<section class="container grey-text">
    <h4 class="center">Add a Pizza</h4>
    <form class="white" action="add.php" method="POST">

        <!-- email start -->
        <label>Your Email</label>
        <input type="text" name="email" value="<?php echo htmlspecialchars ($email); ?>">
        <div class="red-text"> <?php echo $errors["email"] ?> </div>
        <!-- email end -->

        <!-- pizza title start -->
        <label>Pizza Title</label>
        <input type="text" name="title" value="<?php echo htmlspecialchars ($title); ?>">
        <div class="red-text"> <?php echo $errors["title"] ?> </div>
        <!-- pizza title end -->

        <!-- Ingredients start -->
        <label>Ingredients (comma separated)</label>
        <input type="text" name="ingredients" value="<?php echo htmlspecialchars ($ingredients); ?>">
        <div class="red-text"> <?php echo $errors["ingredients"] ?> </div>
        <!-- Ingredients end -->

        <div class="red-text"> <?php echo $errors["noDuplicates"] ?> </div>

        <div class="center">
            <input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
        </div>

    </form>
</section>

<?php include('templates/footer.php'); ?>

</html>