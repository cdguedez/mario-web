// Declara aqui tus variables
let mario = document.querySelector(".mario");
let moneda = document.querySelector("#moneda-1");
let coinTwo = document.querySelector("#moneda-2");
let puntaje = document.querySelector(".score");
let titulo = document.querySelector(".titulo");
let botonFinalizarJuego = document.querySelector(".finalizar");

const LIMIT_LEFT = 0;
const LIMIT_RIGHT = 700;
const floor = '60px';

botonFinalizarJuego.addEventListener('click', () => {
  titulo.innerHTML = "Game over";
});

function distanceElements(baseElement, newElement, relativity) {
  let baseTop = baseElement.offsetTop;
  let baseLeft = baseElement.offsetLeft;
  let baseWidth = baseElement.offsetWidth;

  let newTop = newElement.offsetTop;
  let newLeft = newElement.offsetLeft;
  let newWidth = newElement.offsetWidth;

  let mismaAltura = Math.abs(baseTop - newTop) <= relativity;
  let posicionCerca = Math.abs((baseLeft + baseWidth / 2) - (newLeft + newWidth / 2)) <= relativity;

  return mismaAltura && posicionCerca;
}

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  const key = evt.key;
  switch (key) {
    case "w": case "W": case "ArrowUp": {
      mario.style.bottom = "120px";
      if (distanceElements(moneda, mario, 20)) {
        puntaje.innerHTML = parseInt(puntaje.innerHTML) + 1;
        moneda.style.display = 'none'
      }
      if (distanceElements(coinTwo, mario, 20)) {
        puntaje.innerHTML = parseInt(puntaje.innerHTML) + 1;
        coinTwo.style.display = 'none'
      }
      setTimeout(() => {
        mario.style.bottom = floor;
      }, 750);
      break;
    }
    case "s": case "S": case "ArrowDown": {
      mario.style.bottom = floor;
      break;
    }
    case "a": case "A": case "ArrowLeft": {
      let posicionActual = parseInt(mario.style.left) || 75;
      const cantidadPixelesPorPaso = 10;
      let nuevaPosicion = posicionActual - cantidadPixelesPorPaso;
      if (nuevaPosicion >= LIMIT_LEFT) {
        mario.style.left = nuevaPosicion + "px";
      }
      break;
    }
    case "d": case "D": case "ArrowRight": {
      let posicionActual = parseInt(mario.style.left) || 75;
      const cantidadPixelesPorPaso = 10;
      let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
      if (nuevaPosicion <= LIMIT_RIGHT) {
        mario.style.left = nuevaPosicion + "px";
      }
      break;
    }
    default: {
      break;
    }
  }
})