// Celsius → Fahrenheit
function computeCelsiustoFahrenheit() {
    let c = document.getElementById("n1").value * 1;
    let f = (c * 9/5) + 32;

    document.getElementById("Fahrenheit").innerHTML = 
        'The Fahrenheit of ' + c + ' (Celsius) is:';

    document.getElementById("fahrenheit").value = f;
}

function clearvaluesCtF() {
    document.getElementById("n1").value = '';
    document.getElementById("Fahrenheit").innerHTML = 'Fahrenheit:';
    document.getElementById("fahrenheit").value = '';
}

// Fahrenheit → Celsius
function computeFahrenheittoCelsius() {
    let f = document.getElementById("n2").value * 1;
    let c = (f - 32) * 5/9;

    document.getElementById("Celsius").innerHTML = 
        'The Celsius of ' + f + ' (Fahrenheit) is:';

    document.getElementById("celsius").value = c;
}

function clearvaluesFtC() {
    document.getElementById("n2").value = '';
    document.getElementById("Celsius").innerHTML = 'Celsius:';
    document.getElementById("celsius").value = '';
}

// Meters → Feet
function computeMeterstoFeet() {
    let m = document.getElementById("n3").value * 1;
    let ft = m * 3.281;

    document.getElementById("Feet").innerHTML = 
        'The Feet of ' + m + ' (Meters) is:';

    document.getElementById("feet").value = ft;
}

function clearvaluesMtFt() {
    document.getElementById("n3").value = '';
    document.getElementById("Feet").innerHTML = 'Feet:';
    document.getElementById("feet").value = '';
}

// Feet → Meters
function computeFeettoMeters() {
    let ft = document.getElementById("n4").value * 1;
    let m = ft / 3.281;

    document.getElementById("Meters").innerHTML = 
        'The Meters of ' + ft + ' (Feet) is:';

    document.getElementById("meters").value = m;
}

function clearvaluesFttoM() {
    document.getElementById("n4").value = '';
    document.getElementById("Meters").innerHTML = 'Meters:';
    document.getElementById("meters").value = '';
}
