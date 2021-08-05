<?php
$id = $_POST["id"];
$dbh = new PDO("mysql:host=localhost:3306;dbname=ukulelestd","najlae","1234");
$sql = "UPDATE  ukuleles SET name = :name,brand = :brand,size = :size,availability = :availability,price = :price,image = :image WHERE id = $id";

$addUkulelesQuery = $dbh ->prepare($sql);

$addUkulelesQuery -> bindParam(":name",$_POST["name"],PDO::PARAM_STR);
$addUkulelesQuery -> bindParam(":brand",$_POST["brand"],PDO::PARAM_STR);
$addUkulelesQuery -> bindParam(":size",$_POST["size"],PDO::PARAM_STR);
$addUkulelesQuery -> bindParam(":availability",$_POST["availability"],PDO::PARAM_STR);
$addUkulelesQuery -> bindParam(":price",$_POST["price"],PDO::PARAM_STR);
$addUkulelesQuery -> bindParam(":image",$_POST["image"],PDO::PARAM_STR);

$addUkulelesQuery->execute();
?>