<?php session_start(); if (!isset($_SESSION['user_id'])) { header("Location: login.html"); exit; } ?>
<!DOCTYPE html><html><head><title>Dashboard</title></head>
<body><h1>Welcome, <?php echo htmlspecialchars($_SESSION['user_email']); ?>!</h1>
<a href="logout.php">Logout</a></body></html>