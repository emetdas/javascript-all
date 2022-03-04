"use strict";
let id = [10, 5, 10, 5, 1];
let developers = ['Emet', 'Jonas', 'Dev Ed', 'Brad'];
developers.forEach((developer, index) => {
    console.log(developer, index);
});
let mySet = new Set([...id]);
let total_id = id.reduce((pre, current) => {
    return pre + current;
});
console.log(total_id);
