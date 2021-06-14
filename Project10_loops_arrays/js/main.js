function counting_to_ten() { // This is my whlie loop function
    var digit = "";
    var x = 1;
    while (x <11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting to ten").innerHTML = digit
}

var instruments = ["guitar", "drums", "bass", "piano"]; // this is my for loop function
var X = "";
var z;
function for_loop() {
    for (z = 0; z < instruments.length; z++) {
    X += instruments[z] + "<br>";
    }
    document.getElementById("list of instruments").innerHTML = X;
}

function array_function(){ // this is my array function
    var action = [];
    action[0] = "running";
    action[1] = "walking";
    action[2] = "swimming";
    action[3] = "sprinting";
    document.getElementById("actions").innerHTML = "This person is " + action[2] + " very fast!";
}

function constant_function() { // this is my constant function
    const pet ={type: "cat", breed: "maine coon", color: "black and grey"};
    pet.breed = " tabby";
    pet.color = "grey and tan ";
    document.getElementById("constant").innerHTML = "The pet at the petshop that is avilable for adoption is a " + pet.color + pet.breed + ".";
}

// this is my let function
var x = "hello there....";
document.write(x);
{
    let x = "general Kenobi. What a surprise";
    document.write("<br>" + x);
}
document.write("<br>" + x);

// this is my let object function
let smartphone = {
    make : "Samsung ",
    model : "Galaxy S21 ",
    color : "black ",
    storage: "128 GB ",
    description : function() {
        return "The smartphone is a " + this.color + this.make + this.model + this.storage;
        }      
};
document.getElementById("object smartphone").innerHTML = smartphone.description();

// this is my break statement function
function break_statement(){
    var greeting = "";
    var response = x;
    for (response = 0; response < 9; response ++) {
        if (response === 7){
        break;
    }
    greeting += "hello there " + response + "<br>";
    }
    document.getElementById("break").innerHTML = greeting;
}

// this is my continue statement function
function continue_statement() {
    var x = "";
    var y;
    for (y = 0; y < 8; y ++) {
        if (y === 5) {
            continue
        }
        x += "The number is " + y + "<br>";
    }
    document.getElementById("continue").innerHTML = x
}