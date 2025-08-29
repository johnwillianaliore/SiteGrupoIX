<?php
// includes/config.php

// Detecta BASE_URL automaticamente
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host   = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$base   = rtrim(dirname(isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : '/'), '/\\');

define('BASE_URL', $scheme . '://' . $host . ($base === '' ? '' : $base));
define('SITE_NAME', 'Grupo IX Assessoria de Marketing');

// Helpers
function url(string $path = ''): string {
    $path = '/' . ltrim($path, '/');
    return rtrim(BASE_URL, '/') . $path;
}

function asset(string $path): string {
    $path = ltrim($path, '/');
    return url('assets/' . $path);
}

function e(string $text): string {
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}
