<?php
declare(strict_types=1);

/** Vars opcionais por página */
$title = isset($page_title) && $page_title !== '' ? $page_title . ' | ' . SITE_NAME : SITE_NAME;
$body  = isset($body_class)  ? $body_class : '';

$canonical = url($_GET['p'] ?? '/');
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8" />
  <meta name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <!-- Fonte Poppins -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap">
  <title><?= e($title) ?></title>

  <!-- Faz todos os href/src relativos funcionarem sem reescrever links -->
  <base href="<?= rtrim(BASE_URL, '/') . '/' ?>">

  <!-- CSS global do projeto -->
  <link rel="stylesheet" href="<?= asset('css/style.css') ?>">
  <!-- CSS do seu header (do bloco que você enviou) -->
  <link rel="stylesheet" href="<?= asset('css/header.css') ?>">
  <link rel="stylesheet" href="<?= asset('css/home.css') ?>">
  <link rel="stylesheet" href="<?= asset('css/footer.css') ?>">
  <link rel="stylesheet" href="<?= asset('css/sessao3.css') ?>">
  <link rel="stylesheet" href="<?= asset('css/sessao4.css') ?>">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<link rel="stylesheet" href="<?= asset('css/sessao5.css') ?>">
<link rel="stylesheet" href="<?= asset('css/cta_pratica.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao6.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao7.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao8.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao9.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao10.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao11.css') ?>">
<link rel="stylesheet" href="<?= asset('css/sessao12.css') ?>">


  <!-- SEO básico -->
  <link rel="canonical" href="<?= e($canonical) ?>">
  <meta property="og:site_name" content="<?= e(SITE_NAME) ?>">
  <meta property="og:title" content="<?= e($title) ?>">
  <meta property="og:url" content="<?= e($canonical) ?>">

  <?php if (!empty($extra_head)) echo $extra_head; ?>
</head>
<body class="<?= e($body) ?>">

<?php
// injeta seu HTML puro (sem mexer)
$headerView = __DIR__ . '/header_view.html';
if (is_file($headerView)) {
  include $headerView;
} else {
  echo '<!-- includes/header_view.html não encontrado -->';
}
?>

<main class="site-main container">
