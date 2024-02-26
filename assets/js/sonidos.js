import Animales from "./animal.js";

class Sonidos extends Animales {
    constructor(name, age, image, comment, sound) {
        super(name, age, image, comment, sound);
    }
    playSound() {
        let sonido = "";
        try {
            if ((this.sound != "") || (this.sound != "undefined") || (this.sound != "null")) {
                switch (sound) {
                    case "Rugido": {
                        sonido = "../assets/sounds/Rugido.mp3";
                        break;
                    }
                    case "Aullido": {
                        sonido = "../assets/sounds/Aullido.mp3";
                        break;
                    }
                    case "Gruñido": {
                        sonido = "../assets/sounds/Grunido.mp3";
                        break;
                    }
                    case "Siseo": {
                        sonido = "../assets/sounds/Siseo.mp3";
                        break;
                    }
                    case "Chillido": {
                        sonido = "../assets/sounds/Chillido.mp3";
                        break;
                    }
                    default: {
                        Alert("Sonido no encontrado");
                        break;
                    }
                }
                /* let audio = new Audio(this._sound);
                audio.play();   */
            }
            Alert("Sonido no encontrado");
        }
        catch (error) {
            Alert(error);
        }
    }
}
export default Sonidos;