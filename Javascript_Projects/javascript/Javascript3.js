function displayType(car) {
    var carType = car.getAttribute("data-car-type");
    alert(carType + " is part of the " + car.innerHTML + " family");
}