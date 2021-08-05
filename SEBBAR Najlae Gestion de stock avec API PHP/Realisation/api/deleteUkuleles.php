<?php
$id = $_POST["id"];
$dbh = new PDO("mysql:host=localhost:3306;dbname=ukulelestd","najlae","1234");
$sql = " DELETE FROM ukuleles WHERE id = $id ";
$getUkulele = $dbh->prepare($sql);
$getUkulele->execute();

?>