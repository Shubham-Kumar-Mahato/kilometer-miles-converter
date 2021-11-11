(function(){
    'use strict';
    
    var convertType = "miles";
    var heading = document.querySelector("h1");
    var intro = document.querySelector("h3");
    var answerdiv = document.getElementById("answer");
    var form = document.getElementById("convert");
    document.addEventListener("keydown", function (event) {
        var key = event.code;
        // alert(key);
        if (event.key == "k") {
            convertType = "kilometers"
            heading.innerHTML = "KILOMETERS TO MILES CONVERTER";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
        }
        else if (event.key == "m") {
            convertType = "Miles";
            heading.innerHTML = "MILES TO KILOMETERS CONVERTER";
            intro.innerHTML = "Type in a number of miles and click the button  to convert the distance to kilometers.";
        }

    });
    document.addEventListener("submit", function (event) {
        event.preventDefault();
        var distance = parseFloat(document.getElementById("distance").value);
        if (distance) {

            if (convertType == "Miles") {
                var converted = (distance * 1.689344).toFixed(3);
                answerdiv.innerHTML = distance + "<h2>miles converts to</h2>" + converted + "<h2>kilometers</h2>";
            }
            else {
                var converted = (distance * 0.621371192).toFixed(3);
                answerdiv.innerHTML = distance + "<h2>kilometers converts to</h2>" + converted + "<h2>miles</h2>";
            }
        }
        else {
            answerdiv.innerHTML = "<h2>Please provide a number</h2>"
        }
    });

}());