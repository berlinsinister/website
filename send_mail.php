<?php

if (isset($_POST['submit']) {
    $to = 'malikaefremova@gmail.com';
    $subject = 'New Message from ' . $name;
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    
    $msg = 'You have a new mail from ' . $name . ', ' . $email . '\n' . $comment;
    $msg = wordwrap($msg, 70);

    mail($to, $subject, $msg);
}

?>