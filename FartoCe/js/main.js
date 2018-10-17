var temperature = 0;

document.getElementById("push").addEventListener("click",convert());
function convert() {
    var direction = document.getElementById("direction").value;
    var temp = document.getElementById("temperature").value;

    if (direction == "fc") {
        temperature = (temp - 32) / 1.8;
    }
    else if (direction == "cf") {
        temperature = (temp * 1.8) + 32;
    }
    document.getElementById("convertedTemperature").innerHTML = temperature + "&deg";
}