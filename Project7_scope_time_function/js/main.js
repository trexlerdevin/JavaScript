var x = "hello"; // this is my global and local variable function
var y = " General Kenobi, what a surprise...replied General Grievous";
function global_and_local_variables() {
    
    document.write(x + " there....greeted general Obi Wan Kenobi." + "<br>" + y);
}

function global_and_local_variables2() {
    document.write(x + y);
}
global_and_local_variables();
global_and_local_variables2();

function get_date() { //this is my if and else statement function
    if (new Date().getHours() > 23) {
        document.getElementById("time").innerHTML = "Get back to work. ";
    }
    else {
        document.getElementById("time").innerHTML = "Why are you still awake? go to sleep."
    }
    
}

function login() { // this is my if, else statement string function
    access = document.getElementById("password").value;
    if (access === "hello") {
        login = "you have sucessfully loged in";
    }
    else {
        login = "login unsucessful";
    }
    document.getElementById("what is your password?").innerHTML = login;
}
 
function time_function() { // this is my time function
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "Good morning!";
    }
    else if (time >= 12 == time < 18) {
        reply = "Good afternoon!";
    }
    else {
        reply = "Good eveneing!";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}