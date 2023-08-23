<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addAddress('adahiter@gmail.com');
$mail->Subject = $_POST['subject'];
$mail->Body = $_POST['message'];

if (!$mail->send()) {
  $message = 'Error';
} else {
  $message = 'Success';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode(($response));
