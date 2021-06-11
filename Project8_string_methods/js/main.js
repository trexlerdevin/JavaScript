function slice_function() { // slice function
    var hello = "hello there. General Kenobi";
    var section = hello.slice(13,27);
    document.getElementById("slice").innerHTML = section;
}

function toUpperCase() { //toUpperCase function
    var x = "this is pretty cool";
    var y = x.toUpperCase();
    document.getElementById("upper").innerHTML = y;
}

function search() { // esearch() function
    var str = "Visit function does.";
    var look = str.search("function does");
    
    document.getElementById("search").innerHTML = look;
}

function to_string() { // to_string() fucntion
    var x = 123;
    document.getElementById("to_string_method").innerHTML = x.toString();
}

function precision_method() { //precision method 
    var x = 1234567890.1234567890;
    document.getElementById("precision").innerHTML = x.toPrecision(14);
}

function to_Fixed() { //toFixed method
    var to = 123.456;
    var fixed = to.toFixed(5);
    document.getElementById("to fixed").innerHTML = fixed;
}

function value_of() { // valueOf method
    var str = "Hello there";
    var ret = str.valueOf();
    document.getElementById("value of").innerHTML = ret;
}