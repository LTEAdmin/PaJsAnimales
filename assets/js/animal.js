class animal {
    constructor(name,age, image,comment, sound) {
        this._name = name;
        this._age = age;
        this._image = image;
        this._comment = comment;
        this._sound = sound;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get image() {
        return this._image;
    }
    set image(image) {
        this._image = image;
    }
    get comment() {
        return this._comment;
    }
    set comment(comment) {
        this._comment = comment;
    }
    get sound() {
        return this._sound;
    }
    set sound(sound) {
        this._sound = sound;
    }
}