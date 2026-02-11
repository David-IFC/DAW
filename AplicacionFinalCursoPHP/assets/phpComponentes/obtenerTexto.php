<?php
$lang = $_GET['lang'] ?? 'es';
$key = $_GET['key'] ?? '';

$json_file = __DIR__ . "/../json/$lang.json";
$textos = json_decode(file_get_contents($json_file), true);

if(isset($textos[$key])) {
    echo $textos[$key];
} else {
    echo '';
}
