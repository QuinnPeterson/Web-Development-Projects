<?php 

class User {

    private $name;
    private $email;
    private static $username;

    public static function GetUser($id){
        self::$username;
        echo $id;
    }
    
    function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    public function GetValues()
    {
        return $this->name . $this->email; 
    }
}

class AdminUser extends User
{
    public $level;

    public function __construct($name, $email, $level) {
        parent::__construct($name, $email);
        $this->level = $level;
    }
}


$userAmin = new AdminUser("ryan", "ryan@gmail.com", 55);

$user1 = new User("quinn", "quinn@gmail.com");
$user1->GetValues();

// echo "$user1->name <br>";
// echo $userAmin->name;
echo $userAmin->level;

User::GetUser("Quinn");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>

<body>

</body>

</html>