function dictionary() {
    var smartphone= {
        brand:"samsung",
        model:"Galaxy",
        color:"black",
        camera:"100mp",
    };
    delete smartphone.brand;
    document.getElementById("Dictionary").innerHTML = smartphone.brand;
}