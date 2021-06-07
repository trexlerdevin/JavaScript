function type_coercion(a) {
    var coercion = a
    document.write("123" + "abc").innerHTML = coercion;
}

function type_of(a) {
    var type_of = (a);
    document.write(typeof "text").innerHTML = type_of;
}

function NaN_function() {
    document.getElementById("NaN").innerHTML = isNaN('hello there');
}

function NaN_function_false() {
    document.getElementById("NaN_false").innerHTML = isNaN('1234');
}

function infinity() {
    document.write(1.8E310);
}

function negative_infinity() {
    document.write(-1.8E310);
}

function boolean_true() {
    document.write(123 > 21);
}

function boolean_false(){
    document.write(123 < 21);
}

function console_log() {
    console.log(123 + 456);
}

function console_log_boolean_false() {
    console.log(123 > 456);
}

function double_equal_sign_true() {
    document.write(123 == 123);
}

function double_equal_sign_false() {
    document.write(123 == 1234);
}

function triple_equal_sign() {
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

function boolean_and() {
    document.write(123 > 12 && 123 < 1234);
    document.write(123 > 1234 && 123 < 12);
}

function boolean_or() {
    document.write(123 >1232 || 123 > 12);
    document.write(2134 < 234 || 123 > 1234);
}

function not_function() {
    document.getElementById("boolean not function false").innerHTML = !(123 > 12);
    document.getElementById("boolean not function true").innerHTML = !(123 > 1234);
}