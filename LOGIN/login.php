<?php
include 'base.php';
session_start();

if(isset($_POST['submit'])){

    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = mysqli_real_escape_string($conn, md5($_POST['password']));
 
    $select = mysqli_query($conn, "SELECT * FROM `usuarios` WHERE correo = '$email' AND contraseña = '$pass'") or die('query failed');
 
    if(mysqli_num_rows($select) > 0){
       $row = mysqli_fetch_assoc($select);
       $_SESSION['user_id'] = $row['id'];

       switch (  $_SESSION['user_id']) {
        case 1:
            header('location:index.php');
            break;
        
            case 2:
                header('location:dist/index.php');
                break;
       }
      }
     
    else
   {
    echo '<script language="javascript">alert("Contraseña / Correo incorectos");
    window.location="login.php"
    </script>';   }
   
}

?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Sistema Pront</title>
    <link rel="stylesheet" href="../css/estilos.css">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="icon" href="iconope.png">

</head>

<body>

<form class="login-box"method="post" action="" >
    <h2>iniciar sesión</h2>

    <div class="user-box">
    

    <input type="email" name="email" required placeholder="enter email" class="box">
        <label >Correo</label>
    </div>
    <div class="user-box">
    <input type="password" name="password" required placeholder="enter password" class="box">
        <label>Contraseña</label>

    </div>
    <button type="submit" name="submit" class="btn btn-primary" value="login now">enviar</button>

        <h4>¿no tienes cuenta? <a href="registro.php">registro</a>.</h4>
</form>

</body>
<script   >
  
</script>
</html>
