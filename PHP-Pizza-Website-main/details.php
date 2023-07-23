<?php

    include("config/db_connect.php");


    if(isset($_POST["delete"])){
        $id_to_delete = mysqli_real_escape_string($conn, $_POST["id_to_delete"]);

        $SQL = "DELETE FROM pizzas WHERE id = $id_to_delete";

        if( mysqli_query($conn, $SQL)){
            header("Location: index.php");
        }
        else{
            echo "Query Error: " . mysqli_error($conn);
        }
    }

    if(isset($_GET["id"])){
        $id = mysqli_real_escape_string($conn, $_GET["id"]);

        $SQL = "SELECT * FROM pizzas WHERE id = $id";

        $result = mysqli_query($conn, $SQL);

        $pizza = mysqli_fetch_assoc($result);

        mysqli_free_result($result);
        mysqli_close($conn);

    }

?>

<!DOCTYPE html>
<html lang="en">

<?php include('templates/header.php'); ?>

<div class="container center gray-text">

    <img class="pizza-Image" src="./img/pizza.png" alt="Pizza image">


    <?php if($pizza){?>

    <h4><?php  echo htmlspecialchars($pizza["title"]); ?></h4>
    <p>Created by: <?php  echo htmlspecialchars($pizza["email"]); ?></p>
    <p>Added at: <?php  echo date( htmlspecialchars($pizza["created_at"])); ?></p>
    <h5>Ingredients: </h5>
    <p><?php  echo htmlspecialchars($pizza["ingredients"]); ?></p>

    <!-- DELETE FORM -->

    <form action="details.php" method="post">
        <input type="hidden" name="id_to_delete" value="<?php echo $pizza["id"]; ?>">
        <input type="submit" name="delete" value="delete" class="btn brand z-depth-0">
    </form>

    <form action="update.php" method="post">
        <input type="hidden" name="id_to_update" value="<?php echo $pizza["id"]; ?>">
        <input type="submit" name="update" value="update" class="btn brand z-depth-0">
    </form>


    <?php } else { ?>
    <h5>No such pizza exists!</h5>
    <?php } ?>

</div>

<?php include('templates/footer.php'); ?>

</html>