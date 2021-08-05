<?php

$dbh = new PDO("mysql:host=localhost:3306;dbname=ukulelestd","najlae","1234");
$sql = "INSERT INTO ukuleles(name,brand,size,availability,price,image) VALUE (:name,:brand,:size,:availability,:price,:image)";

$addukulelesQuery = $dbh ->prepare($sql);

$addukulelesQuery -> bindParam(":name",$_POST["name"],PDO::PARAM_STR);
$addukulelesQuery -> bindParam(":brand",$_POST["brand"],PDO::PARAM_STR);
$addukulelesQuery -> bindParam(":size",$_POST["size"],PDO::PARAM_STR);
$addukulelesQuery -> bindParam(":availability",$_POST["availability"],PDO::PARAM_STR);
$addukulelesQuery -> bindParam(":price",$_POST["price"],PDO::PARAM_STR);
$addukulelesQuery -> bindParam(":image",$_POST["image"],PDO::PARAM_STR);

$addukulelesQuery -> execute();

?>