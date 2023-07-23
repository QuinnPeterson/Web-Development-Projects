<?php 
   // connect to database
   $conn = mysqli_connect("localhost", "Quinn", "quinn213", "ninja_pizza");

   if(!$conn){
       echo "connection error" . mysqli_connect_error($conn);
   }

?>