<?php 

$num1=@$_POST['num1'];
$operation=@$_POST['operation'];
$num2=@$_POST['num2'];


if(isset($_POST['equal'])){
    $equal=$_POST['equal'];

    switch($operation){
        case '+': $resultat = intval($num1) + intval($num2);
            break;
        case '-' : $resultat = intval($num1) - intval($num2);
            break;
    }
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
    <input type="number" name="equal" value="<?php echo $resultat ?>">


</form>
    
</body>
</html>

