"use strict";
var id = 20;
var developers = ['Emet', 'Jonas', 'Dev Ed', 'Brad'];
developers.forEach(function (developer) {
    console.log(developer);
});
developers.filter(function (developer) {
    if (developer === 'Emet') {
        console.log("Emet has in ".concat(id, " this array"));
    }
    else {
        console.log('No Emet is There');
    }
});
console.log(id);
