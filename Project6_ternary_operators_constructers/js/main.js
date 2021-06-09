function Ride_Function() {  //Ternary operator function
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function age_function() { //2nd ternary operator function
    var play, can_play;
    play = document.getElementById("Age").value;
    can_play = (play < 18) ? "You are too young to play ":"Welcome to the game.";
    document.getElementById("play").innerHTML = can_play + " Are you ready?";
}

function vehicle(make, model, year, color) { //class constructor function
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Nova = new vehicle("chevy", "Corvette Stingray", 1971, "white");
var Lumiela = new vehicle("Jeep", "Wrangler", 2020, "Red");
var Almita = new vehicle("chevy", "Camero", 1969, "Red");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Almita drives a "+ Almita.vehicle_color + " colored " + Almita.vehicle_model + " manufactured in " + Almita.vehicle_year;
}


function count_function() { // nested function, function
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one ();
        return starting_point;
    }
}