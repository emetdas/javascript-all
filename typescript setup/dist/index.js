"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var id = [10, 5, 10, 5, 1];
var developers = ['Emet', 'Jonas', 'Dev Ed', 'Brad'];
developers.forEach(function (developer) {
    console.log(developer);
});
var mySet = new Set(__spreadArray([], id, true));
