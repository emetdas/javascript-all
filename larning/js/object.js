const user = {
    firstName:'Davide',
    age:23,
    hobbies:['eatin','coding','programming'],
    address:{
        street:'20 rode chittagong',
        city:'Chittagong'
    }
}
console.log(user);

const todolist = [
    {
        id:1,
        Name:'Talior',
        Job:'Porgramming',
    },

    {
        id:2,
        Name:'Emet',
        Job:'Porgrammer',
    },

    {
        id:3,
        Name:'Daved',
        Job:'Python',
    },
    {
        id:4,
        Name:'Tebetl',
        Job:'coding',
    }
];
console.log(todolist);
const todoJSON =JSON.stringify(todolist);
console.log(todoJSON);