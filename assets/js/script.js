import Animal from "./animal.js";
import Sonidos from "./sonidos.js";

const animal = new Animal();
const select = document.getElementById("animal");
const edad = document.getElementById("edad");
let nameAnimal = "";
let ageAnimal = "";

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

const agregar = document.getElementById("btnRegistrar");

agregar.addEventListener("click", () => {
  const name = nameAnimal;
  const age = ageAnimal;
  /*const image = document.getElementById("image").value;
    const comment = document.getElementById("comment").value;
    const sound = document.getElementById("sound").value; */
});
