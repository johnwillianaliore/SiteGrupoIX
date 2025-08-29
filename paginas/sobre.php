<?php
// paginas/contato.php
$page_title = 'Contato';
?>
<h1>Contato</h1>

<form class="form" method="post" action="#">
    <label>
        Nome
        <input type="text" name="nome" required>
    </label>
    <label>
        E-mail
        <input type="email" name="email" required>
    </label>
    <label>
        Mensagem
        <textarea name="mensagem" rows="5" required></textarea>
    </label>
    <button class="btn" type="submit">Enviar</button>
</form>
