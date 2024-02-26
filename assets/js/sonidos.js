import Animales from "./animal.js";

class Sonidos extends Animales {
    constructor(name, age, image, comment, sound) {
        super(name, age, image, comment, sound);
    }
    playSound(selecAnimal) {
        
        try {
            if (
              selecAnimal == "" ||
              selecAnimal == "undefined" ||
              selecAnimal == "null"
            ) {
                 Alert("Sonido no encontrado");
            } else {
                let audio = new Audio(selecAnimal);
                audio.play();  
                
            }
        }           
        catch (error) {
            Alert(error);
        }
    }
}
export default Sonidos;