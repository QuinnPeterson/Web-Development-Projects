<?php 

    include("config/db_connect.php");
 
    $SQL = "SELECT title, ingredients, id FROM pizzas ORDER BY created_at";

    $result = mysqli_query($conn, $SQL);

    $pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC);

    mysqli_free_result($result);
    
    mysqli_close($conn);

?>

<!DOCTYPE html>
<html>

<?php include('templates/header.php'); ?>

<h1 class="center gray-text">

    <!-- Container Start -->
    <div class="container">
        <!-- Row Start -->
        <div class="row">

            <?php foreach($pizzas as $pizza) { ?>

            <!-- Pizza Card Start -->
            <div class="col s6 md3">
                <div class="card z-depth-0">

                    <img class="pizza-Image" src="./img/pizza.png" alt="Pizza image">

                    <!-- Card Content Start-->
                    <div class="card-content center">
                        <h5><b><?php echo htmlspecialchars($pizza["title"]); ?></b></h5>
                        <hr>
                        <ul>
                            <?php foreach (explode(",", $pizza["ingredients"]) as $ing) { ?>

                            <li> <?php echo htmlspecialchars($ing); ?></li>

                            <?php }  ?>
                        </ul>
                    </div>
                    <div class="card-action right-align">
                        <a href="details.php?id=<?php echo $pizza["id"]; ?>" class="brand-text">More info</a>
                    </div>
                    <!-- Card Content End -->
                </div>
            </div>
            <!-- Pizza Card End -->

            <?php } ?>

        </div>
        <!-- Row Start -->

    </div>
    <!-- Container End -->

</h1>

<?php include('templates/footer.php'); ?>

</html>