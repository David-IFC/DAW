<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= TITLE?></title>
    <link rel="stylesheet" href="<?= site_path('assets/css/style.css') ?>">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="<?= site_path('index.php') ?>">Inicio</a></li>
                <li><a href="<?= site_path('crud/listado_crud_obras.php') ?>">CRUD</a></li>
            </ul>
        </nav>
        <?php $current_script = basename($_SERVER['SCRIPT_NAME']); ?>
        <?php if ($current_script === 'index.php'): ?>
            <div class="header-filtro">
                <input id="filtro-obras" type="text" placeholder="Buscar obras..." onkeyup="filterObras()">
            </div>
        <?php elseif (str_starts_with($current_script, 'listado_crud')): ?>
            <div class="header-filtro">
                <input id="filtro-crud" type="text" placeholder="Filtrar tabla..." onkeyup="filterCrudTable()">
            </div>
        <?php endif; ?>
    </header>

    <main>
