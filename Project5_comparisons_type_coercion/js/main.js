function type_coercion(a) {  //this is my type coercion function
    var coercion = a
    document.write("123" + "abc").innerHTML = coercion;
}

function type_of(a) {  //this is my type of function
    var type_of = (a);
    document.write(typeof "text").innerHTML = type_of;
}

function NaN_function() {  //this is my NaN function
    document.getElementById("NaN").innerHTML = isNaN('hello there');
}

function NaN_function_false() { //this is my NaN function for a false return function
    document.getElementById("NaN_false").innerHTML = isNaN('1234');
}

function infinity() { //this is my function that displays infinity
    document.write(1.8E310);
}

function negative_infinity() {  //this is my function that returns -infinity 
    document.write(-1.8E310);
}

function boolean_true() {  //this is my boolean function that returns a true statement
    document.write(123 > 21);
}

function boolean_false(){  //this is my boolean function that returns a false response
    document.write(123 < 21);
}

function console_log() { f//this is my console log function
    console.log(123 + 456);
}

function console_log_boolean_false() { //this is my console log false boolean function
    console.log(123 > 456);
}

function double_equal_sign_true() { //this is my == sign true response function
    document.write(123 == 123);
}

function double_equal_sign_false() {  //this is my == sign false response function
    document.write(123 == 1234);
}

function triple_equal_sign() {  //this is my === sign function that returns multiple responses
    x = "Nova";
    y = "Nova";
    z = "Lumiela";
    w = 06-04-16;
    v = "06-04-16";
    document.write(x === y);
    document.write(x === z);
    document.write(x === w);
    document.write(x === v);
}

function boolean_and() { //this is my boolean and function
    document.write(123 > 12 && 123 < 1234);
    document.write(123 > 1234 && 123 < 12);
}

function boolean_or() { //this is my boolean or function
    document.write(123 >1232 || 123 > 12);
    document.write(2134 < 234 || 123 > 1234);
}

function not_function() { //this is my ! function
    document.getElementById("boolean not function false").innerHTML = !(123 > 12);
    document.getElementById("boolean not function true").innerHTML = !(123 > 1234);
}