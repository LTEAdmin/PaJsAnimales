import Animal from "./animal.js";
import Sonidos from "./sonidos.js";

const animal = new Animal();
const animalSelect = document.getElementById("animalSelect");
const edad = document.getElementById("edad");
const comentario = document.getElementById("comentarios");
const agregar = document.getElementById("btnRegistrar");
const foto = document.getElementById("foto");
const animales = document.getElementById("Animales");
/* const btnleon = document.getElementById("btnleon");
const btnlobo = document.getElementById("btnlobo");
const btnaguila = document.getElementById("btnaguila");
const btnoso = document.getElementById("btnoso");
const btnserpiente = document.getElementById("btnserpiente"); */


let fotoAnimal = "";
let nameAnimal = "";
let ageAnimal = "";
let constrAlert = "";
let validar = false;

animalSelect.addEventListener("change", function () {
  let selectedOption = this.options[animalSelect.selectedIndex];
  let sonidoAnimal = "";
  nameAnimal = selectedOption.value;
  switch (nameAnimal) {
    case "Leon": {
      fotoAnimal = "./assets/imgs/Leon.png";
      sonidoAnimal = "./assets/sounds/Rugido.mp3";
      break;
    }
    case "Lobo": {
      fotoAnimal = "./assets/imgs/Lobo.jpg";
      sonidoAnimal = "./assets/sounds/Aullido.mp3";
      break;
    }
    case "Oso": {
      fotoAnimal = "./assets/imgs/Oso.jpg";
      sonidoAnimal = "./assets/sounds/Grunido.mp3";
      break;
    }
    case "Serpiente": {
      fotoAnimal = "./assets/imgs/Serpiente.jpg";
      sonidoAnimal = "./assets/sounds/Siseo.mp3";
      break;
    }
    case "Aguila": {
      fotoAnimal = "./assets/imgs/Aguila.png";
      sonidoAnimal = "./assets/sounds/Chillido.mp3";
      break;
    }
    default: {
      alert("Animal no encontrado en la lista");
      break;
    }
  }
  if (fotoAnimal != "" && fotoAnimal != "undefined" && fotoAnimal != "null") {
    animal.image = fotoAnimal;
    animal.sound = sonidoAnimal;
    foto.src = fotoAnimal;
    foto.alt = selectedOption.text;
    foto.classList;
  }
});

edad.addEventListener("change", function () {
  let selectedOption = this.options[edad.selectedIndex];
  ageAnimal = selectedOption.value;
});

function validarFormulario(name, age, comment) {
  if (name == "" || name == "Seleccione un animal" || name == null) {
    constrAlert = `${constrAlert} \n Debe seleccionar un animal`;
  }
  if (age == "" || age == "Seleccione un rango de años" || age == null) {
    constrAlert = `${constrAlert} \n Debe seleccionar una edad`;
  }
  if (comment == "" || comment == " " || comment == null) {
    constrAlert = `${constrAlert} \n Debe agregar un comentario`;
  }
  if (constrAlert.length == 0) {
    validar = true;
  } else {
    alert(constrAlert);
    constrAlert = "";
  }
};

/* btnleon.addEventListener("click", () => {
    Sonidos.playSound(Animal.sound);
}); */

agregar.addEventListener("click", () => {
  if (validar == false) {
    validarFormulario(nameAnimal, ageAnimal, comentario.value);
  } else {
    animal.name = nameAnimal.charAt(0).toUpperCase() + nameAnimal.slice(1);
    animal.age = ageAnimal;
    animal.comment = comentario.value;
    agregarAnimalEstudio();
  }
});

function agregarAnimalEstudio() {
  let contenedor = "<div class='card' style='width: 18rem;'>";
  let fotoAnimal = `<img class='card-img-top' src='${animal.image}' alt='${animal.name}'></img>`;
  let botonSonido = `<a href="#" class="btn w-100"  id='btn${animal.name}'><img src="./assets/imgs/audio.svg" width="50px" height="50px"></img></a>`;
  let cierreContenedor = "</div>";
  animales.insertAdjacentHTML("beforeend", contenedor);
  animales.insertAdjacentHTML("beforeend", fotoAnimal);
  animales.insertAdjacentHTML("beforeend", botonSonido);
  animales.insertAdjacentHTML("beforeend", cierreContenedor);
  /*insertAdjacentenHtml */
}
