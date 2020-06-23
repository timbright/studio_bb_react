<?php

$_POST = json_decode(file_get_contents("php://input"), true);

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$textMessage = $_POST['textMessage'];

    /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
    $to = "info@bodybalance.kz"; /* Адрес, куда отправляем письма*/
    $subject = "Сообщение из формы обратной связи на сайте"; /*Тема письма*/
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <mail@bodybalance.kz>\r\n";/*ОТ КОГО*/
    /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
    $message .= "Имя пользователя: ".$name."\n <br>";
    $message .= "Почта: ".$email."\n <br>";
    $message .= "Телефон: ".$tel."\n <br>";
    $message .= "Сообщение: ".$textMessage."\n";

    /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

    $send = mail($to, $subject, $message, $headers);
?>
