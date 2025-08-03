<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $file = fopen("emails.txt", "a"); // يفتح ملف emails.txt أو ينشئه
    fwrite($file, $email . PHP_EOL);  // يضيف الإيميل بسطر جديد
    fclose($file);

    // رجّع المستخدم للصفحة الأساسية
    header("Location: thankyou.html");
    exit();
} else {
    echo "Invalid email address.";
}
}
?>

