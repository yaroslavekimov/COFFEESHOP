<?php 
    $json = json_decode(file_get_contents("php://input"), true);
    $msg_box = "";
    $errors = array();
    
    if ( $json["uname"] == "" )    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if ( $json["uemail"] == "" )   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
 
    if ( empty($errors) ){     
        $message  = "Имя пользователя: " . $json["uname"] . "<br/>";
        $message .= "E-mail пользователя: " . $json["uemail"] . "<br/>";  
        send_mail($message); 
        $msg_box = "Ваша заявка успешно отправлена!";
    } else {
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= $one_error;
        }
    }
 
    echo json_encode(array(
        'result' => $msg_box
    ));
     
    function send_mail($message){
        $mail_to = "admin@simplewebpage.ru"; 
        $subject = "Письмо с обратной связи";
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: Заказ кофе! <admin@simplewebpage.ru>\r\n";
         
        mail($mail_to, $subject, $message, $headers);
    }
?>