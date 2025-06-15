<?php session_start(); require 'db_connect.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$email = trim($_POST['email']); $password = trim($_POST['password']);
if (empty($email) || empty($password)) { echo json_encode(['success' => false, 'message' => 'Please fill in all fields.']); exit; }
$stmt = $pdo->prepare("SELECT id, password FROM users WHERE email = ?"); $stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
if ($user && password_verify($password, $user['password'])) {
$_SESSION['user_id'] = $user['id']; $_SESSION['user_email'] = $email;
echo json_encode(['success' => true, 'message' => 'Login successful!']);
} else { echo json_encode(['success' => false, 'message' => 'Invalid email or password.']); } } ?>