//script obtenido parcialmente por chatgpt en las partes que no son per se del ejercicio
const FELIZ = 'rgb(255,223,51)';
const TRISTE = 'rgb(70,130,180)';
const ENERGICO = 'rgb(255,150,0)';
const RELAJADO = 'rgb(144,238,144)';
const INSPIRADO = 'rgb(173,216,230)';
const ESTRESADO = 'rgb(180,180,180)';
console.log(document.getElementById('colorInicial').value);
// Obtener el contexto 2D de l canvas
const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// Tamaño de cada cuadrado
const squareSize = 16;
let direccion = false;
let amplitud = 100;
let multiplicador = 100;

let maxDist = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
//una posicion aleatoria en la pantalla
let origenX = Math.floor(Math.random() * (window.innerWidth / squareSize) + 1) * squareSize;
let origenY = Math.floor(Math.random() * (window.innerHeight / squareSize) + 1) * squareSize;
let nuevoOrigenx = Math.floor(Math.random() * (window.innerWidth / squareSize) + 1) * squareSize;;
let nuevoOrigenY = Math.floor(Math.random() * (window.innerHeight / squareSize) + 1) * squareSize;

let r;
let g;
let b;
// Función para generar un color aleatorio
function generarColorAleatorio() {
    r = Math.floor(Math.random() * 256 / 2 + 256 / 2);
    g = Math.floor(Math.random() * 256 / 2 + 256 / 2);
    b = Math.floor(Math.random() * 256 / 2 + 256 / 2);
    return `rgb(${r}, ${g}, ${b})`;
}
function generarColorSimilar(valor) {

    // Asegurarnos de que el valor esté dentro del rango proporcionado
    if (valor < 1) valor = 1;
    if (valor > maxDist) valor = maxDist;

    // Mapeo lineal del valor al nuevo rango 1 - 255
    let valorMapeado = ((valor - 1) / (maxDist - 1)) * (255 / 1 - 1) + 1;


    return `rgb(${r - (valorMapeado * 100 / multiplicador)}, ${g - (valorMapeado * 100 / multiplicador)}, ${b - (valorMapeado * 100 / multiplicador)})`;
}

function darColorInicial(color) {
    if (color == null || color == "") {
        color = generarColorAleatorio();
    }
    let devColor = color;
    const rgbValues = devColor.match(/\d+/g); // Esto extrae los números de la cadena
    if (rgbValues && rgbValues.length === 3) {
        r = parseInt(rgbValues[0]); // Convertir a número entero
        g = parseInt(rgbValues[1]);
        b = parseInt(rgbValues[2]);
    } else {
        console.error("El color no está en formato RGB válido");
    }
    return devColor;
}
let colorInicial = darColorInicial(document.getElementById('colorInicial').value);

function ajustarColorTexto() {
    console.log("entrando en funcion");
    //pedido a chatgpt
    let allLabels = document.querySelectorAll("label");

    let colorDeFondo = colorInicial;

    // Convertimos el color de fondo a formato RGB
    let rgb = colorDeFondo.match(/\d+/g);

    // Calcular el brillo (luminancia) usando la fórmula estándar
    let brillo = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);


    allLabels.forEach(element => {
        element.style.backgroundColor = colorInicial;

    });

    document.querySelectorAll("button").forEach(element => {
        element.style.backgroundColor = colorInicial;
        if (brillo > 128) {
            element.style.color = '#000000';  // Texto oscuro
        } else {
            element.style.color = '##ffe3c2';  // Texto claro
        }
    });
    document.querySelectorAll("label").forEach(element => {
        element.style.backgroundColor = colorInicial;
        if (brillo > 128) {
            element.style.color = '#000000';  // Texto oscuro
        } else {
            element.style.color = '##ffe3c2';  // Texto claro
        }
    });
/*     if (brillo > 128) {
        document.body.style.color = '#000000';  // Texto oscuro
    } else {
        document.body.style.color = '#FFFFFF';  // Texto claro
    } */


}






function ajustarTamañoCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let contador = 0;
// Dibujar en el canvas
async function pintarCanvas() {
    contador++
    // Establecer el color de relleno

    // Recorrer el canvas en filas y columnas
    for (let x = 0; x < window.innerWidth; x += squareSize) {
        for (let y = 0; y < window.innerHeight; y += squareSize) {
            if (x == origenX && y == origenY) {
                ctx.fillStyle = colorInicial;
                // Dibujar el cuadrado en la posición (x, y)
                ctx.fillRect(x, y, squareSize, squareSize);
            } else {
                let distancia = Math.abs(Math.sqrt(Math.pow(origenX - x, 2) + Math.pow(origenY - y, 2)));
                // Generar un color aleatorio para cada cuadrado
                let color = generarColorSimilar(distancia);
                // Establecer el color de relleno
                ctx.fillStyle = color;
                // Dibujar el cuadrado en la posición (x, y)
                ctx.fillRect(x, y, squareSize, squareSize);
            }
        }
    }

    //movimiento aleatorio//
    /* let num = Math.floor(Math.random() * 4) + 1;
    switch (num) {
        case 1:
            if(origenX+squareSize>=window.innerWidth){
                origenX = window.innerWidth;
            }else{
                origenX +=squareSize;
            }
            break;
        case 2:
            if(origenX-squareSize<=0){
                origenX = 0;
            }else{
                origenX -=squareSize;
            }
            break;
        case 3:
            if(origenY+squareSize>=window.innerHeight){
                origenY = window.innerHeight;
            }else{
                origenY +=squareSize;
            }
            break;
        case 4:
            if(origenY-squareSize<=0){
                origenY = 0;
            }else{
                origenY -=squareSize;
            }
            break;

        default:
            break;
    } */

/*     if (contador % 4 == 0) {
        if (multiplicador >= 100 || multiplicador <= 80) {
            direccion = !direccion;
        }
        if (direccion) {
            multiplicador--;
        } else {
            multiplicador++;
        }
    } */
    if (contador >= 50) {
        contador = 0;
        nuevoOrigenx = Math.floor(Math.random() * (window.innerWidth / squareSize) + 1) * squareSize;
        nuevoOrigenY = Math.floor(Math.random() * (window.innerHeight / squareSize) + 1) * squareSize;
    }

    let distanciaTotalX = nuevoOrigenx - origenX;
    let distanciaTotalY = nuevoOrigenY - origenY;
    origenX = origenX + distanciaTotalX / 50;
    origenY = origenY + distanciaTotalY / 50;
}

// Ajustar el tamaño del canvas y pintarlo al inicio
ajustarTamañoCanvas();
pintarCanvas();

// Redibujar cuando se cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    ajustarTamañoCanvas();
    pintarCanvas();
});

let allRadios = document.querySelectorAll('input[name="estado_animo"]');
allRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        let estadoAnimo = radio.value;
        colorInicial = darColor(estadoAnimo);

        document.getElementById('miFormulario').onsubmit = function () {
            document.getElementById('colorInicial').value = colorInicial;

        }
        ajustarColorTexto();
        pintarCanvas();
    }, false)
});

function darColor(estadoAnimo) {
    switch (estadoAnimo) {
        case 'Feliz':
            r = 255;
            g = 223;
            b = 51;
            return FELIZ;
        case 'Triste':
            r = 70;
            g = 130;
            b = 180;
            return TRISTE;
        case 'Energetico':
            r = 255;
            g = 150;
            b = 0;
            return ENERGICO;
        case 'Relajado':
            r = 144;
            g = 238;
            b = 144;
            return RELAJADO;
        case 'Inspirado':
            r = 173;
            g = 216;
            b = 230;
            return INSPIRADO;
        case 'Estresado':
            r = 180;
            g = 180;
            b = 180;
            return ESTRESADO;
    }
    
}





ajustarColorTexto();

// intento de volumen ayudado por chatgpt
const video = document.getElementById('video');

// Crear un contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(video);

// Conectar el video al analizador y el analizador a la salida
source.connect(analyser);
analyser.connect(audioContext.destination);

// Configuración del analizador
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

async function getAmplitude() {
    // Obtener datos de amplitud
    analyser.getByteFrequencyData(dataArray);
    const sum = dataArray.reduce((acc, value) => acc + value, 0);
    const average = sum / bufferLength;

    // Imprimir la amplitud en la consola
    console.log('Amplitud promedio: ', average.toFixed(0));
    multiplicador = 25 + (average.toFixed(0) / 80) * (80 - 25);
}

// Ejecutar el análisis de amplitud cada 100 ms
video.addEventListener('play', function () {
    async function update() {
        getAmplitude();
        if (!video.paused && !video.ended) {
            requestAnimationFrame(update);
        }
    }
    update();
});
//
// Actualizar el canvas periódicamente
setInterval(pintarCanvas, 100);