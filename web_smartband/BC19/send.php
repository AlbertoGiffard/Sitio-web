<?php
$nombre = $_POST['name'];
$apellido = $_POST['surname'];
$email = $_POST['email'];
$telefono = $_POST['code'] + $_POST['numOne'] + $_POST['numTwo'] + $_POST['numThree'];
$mensajeField = $_POST['messageField'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . $apellido . ",
 su numero es: " . $telefono . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Mensaje: " . $mensajeField . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'alberto.giffard@pixartargentina.com.ar';
$asunto = 'Mensaje dejado en la WebPage';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Mensaje enviado correctamente';


?>