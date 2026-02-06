
<? $titulo="TestYourSkills";
$clase="index";
$home=false;
$java="";
$copy=true;?>
<? include "assets/phpComponentes/BeforeMain.php"?>

    <div class="logo">

        <img src="assets/img/Logo.png" alt="Logo">

    </div>
    <main>

        <button class="BotonMenuPrincipal" onclick="transicion('TiempoTexto.php')">TiempoTexto</button>
        <button class="BotonMenuPrincipal" onclick="transicion('CuentaLetras.php')">CuentaLetras</button>
        <button class="BotonMenuPrincipal" onclick="transicion('Sudoku.php')">Sudoku</button>
        <button class="BotonMenuPrincipal" onclick="transicion('Punteria.php')">Punteria</button>

    </main>
    <? include "assets/phpComponentes/AfterMain.php";?>
