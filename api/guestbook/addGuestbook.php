<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Répondre directement aux requêtes OPTIONS (préflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}
// Charger la config depuis config.php
$config = include __DIR__ . '/../config.php';

// Connexion mysqli
$conn = new mysqli(
    $config['db_host'],
    $config['db_user'],
    $config['db_pass'],
    $config['db_name']
);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur de connexion DB: " . $conn->connect_error]);
    exit;
}

// Récupérer les données JSON
$data = json_decode(file_get_contents("php://input"), true);
$name = trim($data['name'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Nom et message requis"]);
    exit;
}

// Préparer et exécuter la requête
$stmt = $conn->prepare("INSERT INTO guestbook (name, message) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $message);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Avis ajouté avec succès"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout: " . $stmt->error]);
}

$stmt->close();
$conn->close();
