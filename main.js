window.addEventListener('load', eventWindowLoad, false);

function eventWindowLoad() {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");

    /*
    Reference: https://www.w3schools.com/js/js_objects.asp
    */

    // JSON Object
    let data = {
        "first": {
            "name": "Tom",
            "T-points": 85
        },

        "second": {
            "name": "Sam",
            "S-points": 50
        },

        "third": {
            "name": "David",
            "D-points": 30
        },

        "fourth": {
            "name": "Jerry",
            "J-points": 10
        }
    };

    console.log(typeof data); // Object

    // draw first barchart
    function drawBar(x, y, width, data, color) {
        ctx.beginPath();
        ctx.rect(x, y, width, data, color);
        ctx.fillStyle = "#ff3300";
        ctx.fill();
    }
    drawBar(10, 115, 50, data.first["T-points"]); // Execute

    // draw second barchart
    function drawBarTwo(x, y, width, data, color) {
        ctx.beginPath();
        ctx.rect(x, y, width, data, color);
        ctx.fillStyle = "#0099ff";
        ctx.fill();
    }
    drawBarTwo(90, 150, 50, data.second["S-points"]); // Execute

    // draw third barchart
    function drawBarThree(x, y, width, data, color) {
        ctx.beginPath();
        ctx.rect(x, y, width, data, color);
        ctx.fillStyle = "#cc33ff";
        ctx.fill();
    }
    drawBarThree(170, 170, 50, data.third["D-points"]);

    // draw forth barchart
    function drawBarFour(x, y, width, data, color) {
        ctx.beginPath();
        ctx.rect(x, y, width, data, color);
        ctx.fillStyle = "#00cc66";
        ctx.fill();
    }
    drawBarFour(250, 190, 50, data.fourth["J-points"]); // Execute

}


/*
Linting:
https://jslint.com/
https://jshint.com/
*/