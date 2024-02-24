import Animal from "./animal.js";
//import Sonidos from "./sonidos.js";

const animal = new Animal();
const select = document.getElementById("animal");
const edad = document.getElementById("edad");
const comentario = document.getElementById("comentarios");
const agregar = document.getElementById("btnRegistrar");

let nameAnimal = "";
let ageAnimal = "";
let constrAlert = "";
let validar = false;

//se determina que animal escogio el usuario
select.addEventListener("change", function () {
  let selectedOption = this.options[select.selectedIndex];
  nameAnimal = selectedOption.value;
});

//se determina el rango de edad que ingreso el usuario
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
  }
}

agregar.addEventListener("click", () => {
    if (validar == false) {
        validarFormulario(nameAnimal, ageAnimal, comentario.value);
     }
    else {  
        animal.name = nameAnimal;
        animal.age = ageAnimal;
        animal.comment = comentario.value;
    }
});

