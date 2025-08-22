<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");


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

// Préparer et exécuter la requête pour récupérer les avis
$query = "SELECT id, name, message, created_at FROM guestbook ORDER BY created_at DESC";
$result = $conn->query($query);

$guestbooks = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $guestbooks[] = $row;
    }
    echo json_encode(["success" => true, "dataBooks" => $guestbooks]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erreur lors de la récupération: " . $conn->error]);
}

$conn->close();
