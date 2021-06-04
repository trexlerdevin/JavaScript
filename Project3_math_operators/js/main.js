function myFunction(B, A) {  // this is my addition function
    var add = B + A ;
    document.getElementById("Math").innerHTML= add;
}

function subtract(K, L) { // this is my subtraction function
    var sub = K - L ;
    document.getElementById("Subtraction").innerHTML = sub;
}

function Multi (a, b) { // this is my multiplication function
    var mul = a * b;
    document.getElementById("Multiply").innerHTML = mul;
}

function div (a, b) { // this is my division function
    var divide = a / b;
    document.getElementById("Division").innerHTML = divide;
}

function multi_math(a, b, c, d, e) {  // this is my multi ooperations function
    var many_maths = (a + b) * c / d - e;
    document.getElementById("Multi_math").innerHTML= many_maths;
}

function modulus_operator(a, b) { // this is my modulus operator function
    var math = a % b ;
    document.getElementById("modulus").innerHTML= math;
}

function increment_operator(a) { // this is my increment function
    var increment = a;
    increment ++;
    document.write(increment);
}

function decrement_operator(a) { // this is my decrement function
    var decrement = a;
    decrement --;
    document.write(decrement);
}

function random() { //this is my random # between  0 and 1 function
    window.alert(Math.random());
}

function random_100() { // this is my random # between 0 and 100 function
    window.alert(Math.random() * 100);
    
}

function math_object_method(a, s , d, f, g ) { // this is my math object method for finding absolute values of #'s function
    var a = Math.abs(a);
    var s = Math.abs(s);
    var d = Math.abs(d);
    var f = Math.abs(f);
    var g = Math.abs(g);
    
    var x = a + "<br>" + s +"<br>" + d + "<br>" + f + "<br>" + g;

    document.getElementById("MOM").innerHTML = x;
}