var dog = {name: "Buddy", breed: "Rotwiler", color: "black, and brown"};
var JSONstring= JSON.stringify(dog);
document.getElementById("myDog").innerHTML = JSONstring;

var Dog = '{"name": "Holly", "breed": "Rotwiler", "color": "black, and brown"}';
var JSONstring2 = JSON.parse(Dog);
document.getElementById("dog").innerHTML = JSONstring2.name + " the " +
JSONstring2.breed;
