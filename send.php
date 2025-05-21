<?php
// Cambia esto por tu correo real
$to = "tu-correo@gmealliance.com";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $subject = "Nuevo suscriptor desde GME Alliance";
        $message = "Correo recibido: $email";
        $headers = "From: no-reply@gmealliance.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "Error al enviar el mensaje. Intenta nuevamente.";
        }
    } else {
        echo "Correo no válido.";
    }
} else {
    echo "Acceso inválido.";
}
?>
