<?php
// index.php
declare(strict_types=1);
session_start();
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require __DIR__ . '/includes/config.php';

// Roteamento básico: ?p=home  |  /home (com .htaccess)
$raw = $_GET['p'] ?? 'home';

// Sanitiza: só letras, números, hífens e barras (para subpastas em /paginas, se quiser)
$pagina = preg_replace('#[^a-zA-Z0-9\-/]#', '', $raw);
$pagina = trim($pagina, '/');

// Evita caminho vazio
if ($pagina === '') {
    $pagina = 'home';
}

// Evita path traversal
if (str_contains($pagina, '..')) {
    http_response_code(400);
    $pagina = '404';
}

// Caminho do arquivo
$arquivoPagina = __DIR__ . '/paginas/' . $pagina . '.php';

// Título padrão (pode ser sobrescrito dentro da página)
$page_title = ucfirst(str_replace('-', ' ', basename($pagina)));

// Render
require __DIR__ . '/includes/header.php';

if (is_file($arquivoPagina)) {
    require $arquivoPagina;
} else {
    http_response_code(404);
    require __DIR__ . '/paginas/404.php';
}

require __DIR__ . '/includes/footer.php';
