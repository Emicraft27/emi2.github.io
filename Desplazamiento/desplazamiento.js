const caja = document.getElementById('caja');
const anchoSlider = document.getElementById('ancho');
const altoSlider = document.getElementById('alto');
const radioSlider = document.getElementById('radio');
const sombraXSlider = document.getElementById('sombraX');
const sombraYSlider = document.getElementById('sombraY');
const colorSombraPicker = document.getElementById('colorSombra');

const anchoValor = document.getElementById('anchoValor');
const altoValor = document.getElementById('altoValor');
const radioValor = document.getElementById('radioValor');
const sombraXValor = document.getElementById('sombraXValor');
const sombraYValor = document.getElementById('sombraYValor');
const colorSombraValor = document.getElementById('colorSombraValor');

function actualizarEstilos() {
    caja.style.width = anchoSlider.value + 'px';
    caja.style.height = altoSlider.value + 'px';
    anchoValor.textContent = anchoSlider.value + 'px';
    altoValor.textContent = altoSlider.value + 'px';

    caja.style.borderRadius = radioSlider.value + 'px';
    radioValor.textContent = radioSlider.value + 'px';

    let sombraX = sombraXSlider.value + 'px';
    let sombraY = sombraYSlider.value + 'px';
    let colorSombra = colorSombraPicker.value;
    caja.style.boxShadow = `${sombraX} ${sombraY} 15px ${colorSombra}`;
    sombraXValor.textContent = sombraX;
    sombraYValor.textContent = sombraY;
    colorSombraValor.textContent = colorSombra;
}

anchoSlider.addEventListener('input', actualizarEstilos);
altoSlider.addEventListener('input', actualizarEstilos);
radioSlider.addEventListener('input', actualizarEstilos);
sombraXSlider.addEventListener('input', actualizarEstilos);
sombraYSlider.addEventListener('input', actualizarEstilos);
colorSombraPicker.addEventListener('input', actualizarEstilos);

actualizarEstilos();
