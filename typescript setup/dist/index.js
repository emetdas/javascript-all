"use strict";
let id = [10, 5, 10, 5, 1];
let developers = ['Emet', 'Jonas', 'Dev Ed', 'Brad'];
let Name = 'emet';
let search = developers.filter((developer) => {
    return developer.toLocaleLowerCase().includes(Name);
});
console.log(search);
