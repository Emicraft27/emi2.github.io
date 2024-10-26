const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");

// Color de relleno para la calabaza
ctx.fillStyle = "orange";

// Centrar calabaza y demás elementos alrededor del centro
const centerX = lienzo.width / 2;
const centerY = lienzo.height / 2;

// Dibujar la forma básica de la calabaza
ctx.beginPath();
ctx.arc(centerX, centerY, 60, 0, Math.PI * 2, true);  // círculo central
ctx.arc(centerX - 40, centerY, 40, 0, Math.PI * 2, true);  // curva izquierda
ctx.arc(centerX + 40, centerY, 40, 0, Math.PI * 2, true); // curva derecha
ctx.fill();

// Color de relleno para el tallo
ctx.fillStyle = "green";

// Dibujar el tallo de la calabaza
ctx.beginPath();
ctx.moveTo(centerX - 10, centerY - 60);
ctx.lineTo(centerX + 10, centerY - 60);
ctx.lineTo(centerX, centerY - 80);
ctx.closePath();
ctx.fill();

// Agregar detalles adicionales, líneas de los gajos
ctx.strokeStyle = "brown";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(centerX, centerY - 60);  // desde el tallo hasta el borde inferior
ctx.lineTo(centerX, centerY + 60);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX - 20, centerY - 50);  // línea curva izquierda
ctx.lineTo(centerX - 20, centerY + 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX + 20, centerY - 50);  // línea curva derecha
ctx.lineTo(centerX + 20, centerY + 50);
ctx.stroke();

// Sombra de la calabaza
ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
ctx.beginPath();
ctx.ellipse(centerX, centerY + 65, 80, 20, 0, 0, Math.PI * 2);
ctx.fill();

// Dibujar hojas alrededor de la calabaza
ctx.fillStyle = "green";

function dibujarHoja(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(x - 20, y - 20, x, y - 40); // lado izquierdo de la hoja
  ctx.quadraticCurveTo(x + 20, y - 20, x, y);     // lado derecho de la hoja
  ctx.fill();
}

dibujarHoja(centerX - 50, centerY - 40);
dibujarHoja(centerX + 50, centerY - 40);
dibujarHoja(centerX - 20, centerY - 70);
dibujarHoja(centerX + 20, centerY - 70);

// Dibujar césped alrededor de la calabaza
ctx.strokeStyle = "green";
ctx.lineWidth = 3;

function dibujarCesped(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 5, y - 20); // primer pico de césped
  ctx.lineTo(x + 10, y);     // segundo pico de césped
  ctx.stroke();
}

for (let i = 0; i <= lienzo.width; i += 15) {
  dibujarCesped(i, centerY + 80);
}

// Nubes
ctx.fillStyle = "lightgray";
function dibujarNube(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, true); // círculo central
  ctx.arc(x - 20, y, 15, 0, Math.PI * 2, true); // círculo izquierdo
  ctx.arc(x + 20, y, 15, 0, Math.PI * 2, true); // círculo derecho
  ctx.fill();
}

dibujarNube(centerX - 100, centerY - 130);
dibujarNube(centerX + 100, centerY - 120);

// Sol
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(centerX + 200, centerY - 150, 40, 0, Math.PI * 2, true);
ctx.fill();

// Rayos del sol
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;

function dibujarRayo(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

for (let i = 0; i < 360; i += 30) {
  let rad = i * (Math.PI / 180);
  dibujarRayo(centerX + 200, centerY - 150, centerX + 200 + 60 * Math.cos(rad), centerY - 150 + 60 * Math.sin(rad));
}

// Montañas ajustadas en el fondo
ctx.fillStyle = "#654321";

function dibujarMontana(x, y, base, altura) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + base / 2, y - altura);
  ctx.lineTo(x + base, y);
  ctx.closePath();
  ctx.fill();
}

dibujarMontana(centerX - 150, centerY + 80, 150, 40); // montaña izquierda baja
dibujarMontana(centerX + 100, centerY + 80, 150, 40); // montaña derecha baja

// Dibujar espantapájaros centrado y visible
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.fillRect(centerX + 120, centerY + 10, 20, 30); // cuerpo
ctx.fillStyle = "brown";
ctx.fillRect(centerX + 115, centerY - 10, 30, 20); // cabeza

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(centerX + 120, centerY + 10);
ctx.lineTo(centerX + 110, centerY); // brazo izquierdo
ctx.lineTo(centerX + 120, centerY + 5);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX + 140, centerY + 10);
ctx.lineTo(centerX + 150, centerY); // brazo derecho
ctx.lineTo(centerX + 140, centerY + 5);
ctx.closePath();
ctx.fill();

// Ojos y boca del espantapájaros
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(centerX + 125, centerY - 5, 2, 0, Math.PI * 2); // ojo izquierdo
ctx.arc(centerX + 135, centerY - 5, 2, 0, Math.PI * 2); // ojo derecho
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX + 125, centerY + 5);
ctx.quadraticCurveTo(centerX + 130, centerY + 10, centerX + 135, centerY + 5); // boca
ctx.stroke();




