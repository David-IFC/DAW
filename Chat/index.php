<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/session.php';
require_once __DIR__ . '/config/database.php';

if (!isLoggedIn()) {
    header('Location: /auth/login.php');
    exit;
}

$pdo = getPDO();
$stmt = $pdo->query(
    'SELECT m.id, m.message, m.created_at, u.username
     FROM messages m
     INNER JOIN users u ON u.id = m.user_id
     ORDER BY m.id DESC
     LIMIT 50'
);
$messages = array_reverse($stmt->fetchAll());
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat en tiempo real</title>
    <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
<main class="chat-container">
    <header class="chat-header">
        <h1>Chat general</h1>
        <div class="user-info">
            <span>Hola, <?= htmlspecialchars(currentUsername()) ?></span>
            <a href="/auth/logout.php">Salir</a>
        </div>
    </header>

    <section id="messages" class="messages">
        <?php foreach ($messages as $item): ?>
            <article class="message">
                <div class="meta">
                    <strong><?= htmlspecialchars((string)$item['username']) ?></strong>
                    <small><?= htmlspecialchars((string)$item['created_at']) ?></small>
                </div>
                <p><?= nl2br(htmlspecialchars((string)$item['message'])) ?></p>
            </article>
        <?php endforeach; ?>
    </section>

    <form id="chat-form" class="chat-form">
        <input type="text" id="message-input" name="message" maxlength="500" placeholder="Escribe tu mensaje..." required>
        <button type="submit">Enviar</button>
    </form>
</main>

<script>
    window.chatConfig = {
        initialLastId: <?= (int)(count($messages) ? end($messages)['id'] : 0) ?>
    };
</script>
<script src="/assets/chat.js"></script>
</body>
</html>
