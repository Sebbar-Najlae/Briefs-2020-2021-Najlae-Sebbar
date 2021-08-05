
<?php

$num1=@$_POST['num1'];
$operation=@$_POST['operation'];
$num2=@$_POST['num2'];

class Calculator {

private $_num1, $_num2;

public function __construct( $num1, $num2,) {
$this->_num1 = $num1;
$this->_num2 = $num2;
}
public function add() {
return $this->_num1 + $this->_num2;
}
public function subtract() {
return $this->_num1 - $this->_num2;
}
}

$calc = new Calculator($num1, $num2); 

switch($operation){

    case '+': $resultat = $calc-> add();
            break;
    case '-' : $resultat = $calc-> subtract();
            break;

}



?>



<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>

<form action="" method="post">
    <input type="number" name="num1" value="">
    <select name="operation">
                  <option>+</option>
                  <option>-</option>
    </select>
    <input type="number" name="num2" value="">

    


    <input type="submit" name="eq" value="="  ></input>
    <input type="text" name="equal" value="<?php echo $resultat ?>">


</form>
    
</body>
</html>
