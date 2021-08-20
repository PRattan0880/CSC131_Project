<?php
header("Access-Control-Allow-Origin: *");

$fname=$_POST['first'];
$lname=$_POST['last'];
$func=$_POST['func'];
$email=$_POST['email'];

if($func=='add'){
    //$email=$_POST['email'];
    $checked=$_POST['checked'];
    $initial=$_POST['init'];
    addData($fname,$lname,$email,$checked,$initial);
}else{
    $change=$_POST['final'];
    update($fname,$lname,$change,$email);
}

function createConnection(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname="userReport";
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        //CREATE DATABASE
        $sql = "CREATE DATABASE IF NOT EXISTS userReport";
        
        //SQL to create table
        $sql="CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT, firstname VARCHAR(30) NOT NULL,lastname VARCHAR(30) NOT NULL,email VARCHAR(50),contact VARCHAR(4), intial VARCHAR(10), final VARCHAR(10))";
        
        // use exec() because no results are returned
        $conn->exec($sql);
        
        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
            echo $v;
        }
    }catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    
    $conn = null;
}
function createDatabase(){
    
}

function addData($fname,$lname,$email,$checked,$initial){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname="userReport";
    
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    //Prepare and bind
    $stmt=$conn->prepare("INSERT INTO users(firstname,lastname,email,contact,initial) VALUES (:firstname,:lastname,:email,:contact,:initial)");
    
    $stmt->bindParam(':firstname', $fname);
    $stmt->bindParam(':lastname', $lname);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':contact', $checked);
    $stmt->bindParam(':initial', $initial);
    
    
    //set parameters and execute
    $stmt->execute();
}

//Update data into the final column of database
function update($fname,$lname,$change,$email){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname="userReport";
    
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    //Prepare and bind
    $stmt=$conn->prepare("UPDATE users SET final=:final WHERE firstname=:firstname AND lastname=:lastname AND email=:email");
    
    $stmt->bindParam(':final', $change);
    $stmt->bindParam(':firstname', $fname);
    $stmt->bindParam(':lastname', $lname);
    $stmt->bindParam(':email',$email);
    
    $stmt->execute();
}

?>