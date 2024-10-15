<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Comprobamos si el campo 'food' está definido y no está vacío
    if (isset($_POST['estado_animo']) && !empty($_POST['estado_animo'])) {
        $estado = $_POST['estado_animo'];
    } 
    if (isset($_POST['colorInicial']) && !empty($_POST['colorInicial'])) {
        $colorInicial = $_POST['colorInicial'];
    } 
   }

/* $estado = $_POST['estado_animo'];
$colorInicial = $_POST['colorInicial']; */

$Feliz = ' <h2>Here Comes the Sun: The Beatles</h2><br>
<video id="video" width="600" controls autoplay loop>
<source src="./videos/Feliz.mp4" type="video/mp4">
</video>';
$Triste = ' <h2>Acid Rain: Avenged Sevenfold</h2><br>
<video id="video" width="600" controls autoplay loop>
<source src="./videos/Triste.mp4" type="video/mp4">
</video>';
$Energetico = ' <h2>Eye of the Tiger: Survivor</h2><br>
<video id="video" width="600" controls autoplay loop>
<source src="./videos/Energico.mp4" type="video/mp4">
</video>';
$Relajado = ' <h2>Clair de lune: Debussy</h2><br>
<video id="video" width="600" controls autoplay loop>
<source src="./videos/Relajado.mp4" type="video/mp4">
</video>';
$Inspirado = ' <h2>On the Top The World: Imagine Dragons</h2><br>
<video id="video" width="600" controls autoplay loop>
<source src="./videos/Inspirado.mp4" type="video/mp4">
</video>';
$Estresado = ' <h2>The Sound of Silence: Disturbed</h2><br><video id="video" width="600" controls autoplay loop>
<source src="./videos/Estresado.mp4" type="video/mp4">
</video>';

$urls = array("Feliz" => $Feliz, "Triste" => $Triste, "Energetico" => $Energetico, "Relajado" => $Relajado, "Inspirado" => $Inspirado, "Estresado" => $Estresado);
$url = $urls[$estado];
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <script src="main.js" defer></script>
</head>

<body>
    <canvas id="miCanvas"></canvas>
    <div id="mainContainer">
        <div id="formContainer">
            <h1>Cómo te sientes hoy?</h1>
            <form id="miFormulario" action="practica3.php" method="POST">
                <label>
                    <input type="radio" name="estado_animo" value="Feliz" required>
                    Feliz
                </label><br>

                <label>
                    <input type="radio" name="estado_animo" value="Triste">
                    Triste
                </label><br>

                <label>
                    <input type="radio" name="estado_animo" value="Energetico">
                    Enérgico
                </label><br>

                <label>
                    <input type="radio" name="estado_animo" value="Relajado">
                    Relajado
                </label><br>

                <label>
                    <input type="radio" name="estado_animo" value="Inspirado">
                    Inspirado
                </label><br>

                <label>
                    <input type="radio" name="estado_animo" value="Estresado">
                    Estresado
                </label><br><br>
                <input type='hidden' id='colorInicial' name='colorInicial'
                    value='<?php echo htmlspecialchars($colorInicial); ?>'>

                <div class="submit-button">
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </div>
        <div id="videoContainer">
            <h1>Te recomendamos</h1>
            <div>
                <?php echo $url;
                ?>
            </div>
        </div>
    </div>
</body>

</html>