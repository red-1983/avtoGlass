<?php
    $name = $_POST['name'];
   	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $datalist = $_POST['datalist'];
    $text = $_POST['text'];

	$to = "benzayura@tut.by"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
    Услуга: $datalist /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Спасибо, Ваша заявка отправлена, <br>
наш специалист свяжется с Вами</p>
