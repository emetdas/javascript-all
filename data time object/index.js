// 1 JANUARY 1970 
var date = new Date();
// console.log(data);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());

// formate new Date(year,month,day,hour,minute,second,millisecond);
// console.log(new Date(2021,3,13,11,10,50).toLocaleString());
// console.log(new Date("April 13,2021 11:10:00").toLocaleString());

// Dates Methods

// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());


// Set Date
// console.log(date.setFullYear(2021,3,13));
// console.log(date.setHours(13,10,00));
// console.log(date.setMinutes(10,10,500));
// console.log(date.setDate(13));


// Time Methods
// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.setTime());
// console.log(date.setHours(14));
// console.log(date.setMinutes(51));
// console.log(date.setSeconds(50));
// console.log(date.setMilliseconds(100));


console.log(date.toLocaleTimeString()); //2:55:02 PM
console.log(date.toLocaleDateString()); //4/13/2021
console.log(date.toLocaleString()); // 4/13/2021, 2:55:02 PM