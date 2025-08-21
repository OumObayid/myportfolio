<?php
// Charger le fichier .env
function loadEnv($path)
{
    if (!file_exists($path)) {
        throw new Exception(".env file not found!");
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // Ignorer les commentaires
        list($key, $value) = explode('=', $line, 2);
        putenv("$key=$value");
    }
}

// Charger les variables d'environnement
loadEnv(__DIR__ . '/.env');

// Accéder aux variables d'environnement
$config = [
    'smtp_host' => getenv('SMTP_HOST'),
    'smtp_user' => getenv('SMTP_USER'),
    'smtp_pass' => getenv('SMTP_PASS'),
    'smtp_secure' => getenv('SMTP_SECURE'),
    'smtp_port' => getenv('SMTP_PORT'),
    'imap_host' => getenv('IMAP_HOST'),
    'imap_port' => getenv('IMAP_PORT'),
    'imap_secure' => getenv('IMAP_SECURE'),
    'imap_folder' => getenv('IMAP_FOLDER'),
    'imap_user' => getenv('IMAP_USER'),
    'imap_pass' => getenv('IMAP_PASS'),
];

return $config;
