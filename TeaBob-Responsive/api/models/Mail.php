<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
   //Load Composer's autoloader
   require 'vendor/autoload.php';

   class Mailer{
    protected $pdo; 

    public function __construct(\PDO $pdo) {
        $this->pdo = $pdo;
    }
        

    public function mailer($d){
        print_r($d);

        $receiver = $d->email;
        $subj = 'TEABOB Verification Code for your account';
        $content = $d->OTP;

        $mail = new PHPMailer(true);

        try {
            //Server settings
            // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'darklightzzz40@gmail.com';                  //SMTP username
            $mail->Password   = 'pass555word';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom('darklightzzz40@gmail.com', 'TeaBob Email');
            $mail->addAddress($receiver);     //Add a recipient
            $mail->addReplyTo('darklightzzz40@gmail.com', 'TeaBob Email');

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subj ;
            $mail->Body    = $content;
            $mail->AltBody =  $content;

            $mail->send();
            return array("data"=>"Message has been sent");
        } catch (Exception $e) {
            return array("error"=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
        }
    }
}
    ?>