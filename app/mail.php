<?php

$frm_name  = "Youname";
$recepient = "freelancerbest@yandex.ru";
$sitename  = "С сайта портфолио";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$tel = trim($_POST["phone"]);

$message = "
Имя: $name <br>
Телефон: $tel <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");