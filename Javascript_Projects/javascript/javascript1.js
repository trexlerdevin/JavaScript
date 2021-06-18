function switch_function() {
    var output;
    var animals = document.getElementById("input").value;
    var animal_string = " is an awesome animal!";
    switch(animals){
        case "Tiger":
            output = "Tiger" + animal_string;
        break;
        case "Lion":
            output = "Lion" + animal_string;
        break;
        case "Bear":
            output = "Bear" + animal_string;
        break;
        case "Leopard":
            output = "Leopard" + animal_string;
        break;
        default:
        output = "Please enter an animal from the list above and spell it the same as it appears on the list above.";
    }
    document.getElementById("output").innerHTML = output;

}

function class_name() {
    var x = document.getElementsByClassName("click");
    x[0].innerHTML = "We have changed this text!!!!";
}

var c = document.getElementById("canvas");
var x = c.getContext("2d");
x.moveTo(0,0);
x.lineTo(500,250);
x.stroke();

var y = document.getElementById("canvas");
var z = y.getContext("2d");
z.beginPath();
z.arc(200, 150, 100, 0 , 2 * Math.PI);
z.stroke();

var c = document.getElementById("canvas");
var t = c.getContext("2d");
t.font = "30px seri-sans";
t.fillText("Hello World", 170, 125);

var st = document.getElementById("canvas");
var stroket = st.getContext("2d");
stroket.font = "30px Roboto";
stroket.strokeText("Well Hello There", 100, 200);

var gr = document.getElementById("canvas");
var gradient = gr.getContext("2d");

//creating gradient
var grad = gradient.createLinearGradient(0, 0, 200, 0);
grad.addColorStop(0, "red");
grad.addColorStop(1, "white");

//fill with gradient
gradient.fillStyle = grad;
gradient.fillRect(10, 10, 150, 80);