"use strict";
var id = 20;
var developers = ['Emet', 'Jonas', 'Dev Ed'];
developers.forEach(function (developer) {
    console.log(developer);
});
developers.filter(function (developer) {
    if (developer === 'Emet') {
        console.log("Emet has in this array");
    }
    else {
        console.log('No Emet There');
    }
});
console.log(id);
