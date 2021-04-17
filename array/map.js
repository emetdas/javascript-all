var amunt = [10,10,2,10,45,10];
var usdTodolar = 85;
var newar = amunt.map(function(arr){
    return arr * usdTodolar;
});
console.log(newar);