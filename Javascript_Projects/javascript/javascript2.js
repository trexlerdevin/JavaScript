function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x =="") {
        alert("Name must be filled out");
        return false;
    }
}

function logIn() {
    document.getElementById("login-form").style.display = "block";
}

function closeButton() {
    document.getElementById("login-form").style.display = "none"
}

function slideshow() {
    document.getElementById('Carousel') {
        
    }
}