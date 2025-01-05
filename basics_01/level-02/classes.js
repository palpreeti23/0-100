// class - class is basically a blue print of object in js. in real life scenario its like a blueprint of home using which you can construct multiple houses or bluilding.

class animal{
    constructor(name, color, legCount, lang){
        this.name = name;
        this.color = color;
        this.legCount = legCount;
        this.lang = lang;
    }

    static greet(){
        console.log('hello there')
    }

     speak(){
        console.log('this is a ' + this.name + ' of ' + this.color + " color " +'has ' + this.legCount+ ' legs and  speaks ' + this.lang );

    }
    
}

animal.greet()
// console.log(animal.greet())
let dog = new animal('dog', 'white', 4, 'bhow bhow');
dog.speak();
let cat = new animal('cat', 'brown', 4, 'meow meow');
cat.speak()