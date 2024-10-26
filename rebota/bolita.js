const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function (radio) {
        ctx.fillStyle = `hsl(${radio}, 50%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
};

let x = 10;
let y = 10;
let right = true;
let down = true;
let radio = 100;

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show(radio);

    // Cambiar el valor de radio para el color HSL
    radio = (radio + 1) % 360;

    // Validar dirección en el eje X
    if (right) {
        x++;
    } else {
        x--;
    }

    // Validar dirección en el eje Y
    if (down) {
        y++;
    } else {
        y--;
    }

    // Cambiar de dirección si la pelota llega a los bordes en X
    if (x >= 590 || x <= 10) {
        right = !right;
    }

    // Cambiar de dirección si la pelota llega a los bordes en Y
    if (y >= 390 || y <= 10) {
        down = !down;
    }

}, 10);
