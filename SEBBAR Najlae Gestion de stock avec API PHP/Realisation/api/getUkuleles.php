<?php

$dbh = new PDO("mysql:host=localhost:3306;dbname=ukulelestd","najlae","1234");

$sql = "SELECT * FROM ukuleles";
$getukulelesQuery = $dbh -> query($sql);
$getukuleles = $getukulelesQuery -> fetchAll(PDO::FETCH_ASSOC);

print_r(json_encode($getukuleles));

?>