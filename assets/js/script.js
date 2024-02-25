import Animal from "./animal.js";
//import Sonidos from "./sonidos.js";

const animal = new Animal();
const animalSelect = document.getElementById("animalSelect");
const edad = document.getElementById("edad");
const comentario = document.getElementById("comentarios");
const agregar = document.getElementById("btnRegistrar");
const foto = document.getElementById("foto");
const animales=document.getElementById("animales");
/* const tarjeta =Document.getElementByclass("tarjeta"); */
let fotoAnimal = "";
let nameAnimal = "";
let ageAnimal = "";
let constrAlert = "";
let validar = false;

animalSelect.addEventListener("change", function () {
  let selectedOption = this.options[animalSelect.selectedIndex];
  nameAnimal = selectedOption.value;
  switch (nameAnimal) {
    case "Leon": {
      fotoAnimal = "./assets/imgs/Leon.png";
      break;
    }
    case "Lobo": {
      fotoAnimal = "./assets/imgs/Lobo.jpg";
      break;
    }
    case "Oso": {
      fotoAnimal = "./assets/imgs/Oso.jpg";
      break;
    }
    case "Serpiente": {
      fotoAnimal = "./assets/imgs/Serpiente.jpg";
      break;
    }
    case "Aguila": {
      fotoAnimal = "./assets/imgs/Aguila.png";
      break;
    }
    default: {
      break;
    }
  }
  if (fotoAnimal != "" && fotoAnimal != "undefined" && fotoAnimal != "null") {
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
}

agregar.addEventListener("click", () => {
  if (validar == false) {
    validarFormulario(nameAnimal, ageAnimal, comentario.value);
  } else {
    animal.name = nameAnimal;
    animal.age = ageAnimal;
      animal.comment = comentario.value;
      agregarAnimalEstudio ()
  }
});

function agregarAnimalEstudio() { 
    let contenedor = document.createElement ("div class='card' style='width: 18rem;'>");
    let fotoAnimal = document.createElement("img class='card-img-top' src='./assets/imgs/Leon.png' alt='${animal.name'></img>");
    animales.appendChild (contenedor,fotosAnimal);
      /*   <div class="card" style="width: 18rem;"> */
  {/* <img class="card-img-top" src="./assets/imgs/Leon.png" alt="Card image cap"></img> */}
}
