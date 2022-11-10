<?php
require_once 'PHPMailer.php';
require_once 'SMTP.php';
require_once 'Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
session_start();
try {
    if (!empty($_SESSION["OTP"]) && $_SESSION["OTP"] == $_POST['OTP']) {


        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();
        //Send using SMTP
        $mail->Host = 'mail.wigomania.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication
        $mail->SMTPKeepAlive = true;
        $mail->Username = 'support@wigomania.com';                     //SMTP username
        $mail->Password = 'nikita2015';                               //SMTP password
        $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
        $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


        //Recipients
        $mail->setFrom('support@wigomania.com', 'Wigomania');
        $mail->addAddress('support@wigomania.com', 'Wigomania');//Add a recipient
        $mail->addAddress($_POST['email']);     //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = ' Reach Us';
        $mail->Body = '<h3>Reach Us</h3><table><tr><th style="text-align: left">Your Name</th><td>' . $_POST['name'] . '</td></tr><tr><th style="text-align: left">Your Mobile Number</th><td>+' . $_POST['countryCode'] . ' ' . $_POST['phone'] . '</td></tr><tr><th style="text-align: left">Your Email ID</th><td>' . $_POST['email'] . '</td></tr><tr><th style="text-align: left">How Can We Help?</th><td>' . $_POST['help'] . '</td></tr><tr><th style="text-align: left">Purpose of Inquiry</th><td>' . $_POST['inquiry'] . '</td></tr></table>';
        $mail->send();
    }
    // echo 'Message has been sent';
} catch (Exception $e) {
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

$mail->clearAddresses();
$mail->clearAttachments();
header("Location: https://wigomania.com/thankyou");
die();
