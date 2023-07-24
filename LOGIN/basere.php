<?php 
$correo=$_POST['email']; 
$contraseña=$_POST["psw"];
$_SESSION['email']=$correo;

if(!empty($correo)|| !empty($contraseña)){
    $host="localhost";
    $dbusername="root";
$dbpassword="";
$dbname="reparalo";
$conn=new mysqli($host,$dbusername,$dbpassword,$dbname);
if(mysqli_connect_error()){
    die('connect error('.mysqli_connect_errno().')'.myslqi_connect_error());
}else {
    $SELECT="SELECT telP from reprovedores where telP= ? limit 1";
    $INSERT="INSERT INTO registro(correo,contraseña)values(?,?)";
    $stmt=$conn->prepare($SELECT);
    $stmt->bind_param("i" , $telP);
    $stmt->execute();
    $stmt->bind_result($telP);
    $stmt->store_result();
    $rnum=$stmt->num_rows;
    if($rnum ==0){
        $stmt->close();
        $stmt=$conn->prepare($INSERT);
        $stmt->bind_param("ss",$correo,$contraseña);
        $stmt->execute();
        header("Location: registro.php");
    }
     else{
    }
    $stmt->close();
    $conn->close();
        echo"alguien registro ese correo.";
        
}
}
else{
echo"todos los datos son OBLIGATORIOS";
die();
}
?>