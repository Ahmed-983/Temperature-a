function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("celsius").value * 9 / 5 + 32;
        document.getElementById("fahrenheit").value = Math.round(x);

    } else {
        x = (document.getElementById("fahrenheit").value - 32) * 5 / 9;
        document.getElementById("celsius").value = Math.round(x);
    }
}