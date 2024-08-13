<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Validate form data (you can add more validation if required)

    // Send email
    $to = "info@hykonace.com"; // Replace with your email address
    $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();
    $body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully, redirect to success page
        header("Location: success_popup.html");
        exit;
    } else {
        // Email sending failed, handle the error (optional)
        echo "Error: Unable to send the email.";
    }
}
?>