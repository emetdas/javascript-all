var obj = {
    name:"Emet",
    Develoepr:"opp",
    age:20,
    pro:{
        1:"PHP",
        1:"Java"
    }
}
console.log(obj.pro);
result = JSON.stringify(obj);
console.log(result);
console.log(JSON.parse(result));
