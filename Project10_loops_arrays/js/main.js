function counting_to_ten() {
    var digit = "";
    var x = 1;
    while (x <11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting to ten").innerHTML = digit
}

var instruments = ["guitar", "drums", "bass", "piano"];
var X = "";
var z;
function for_loop() {
    for (z = 0; z < instruments.length; z++) {
    X += instruments[z] + "<br>";
    }
    document.getElementById("list of instruments").innerHTML = X;
}

function array_function(){
    var action = [];
    action[0] = "running";
    action[1] = "walking";
    action[2] = "swimming";
    action[3] = "sprinting";
    document.getElementById("actions").innerHTML = "This person is " + action[2] + " very fast!";
}

function constant_function() {
    const pet ={type: "cat", breed: "maine coon", color: "black and grey"};
    pet.breed = " tabby";
    pet.color = "grey and tan ";
    document.getElementById("constant").innerHTML = "The pet at the petshop that is avilable for adoption is a " + pet.color + pet.breed + ".";
}

var x = "hello there....";
document.write(x);
{
    let x = "general Kenobi. What a surprise";
    document.write("<br>" + x);
}
document.write("<br>" + x);

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