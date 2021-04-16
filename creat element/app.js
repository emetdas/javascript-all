// Creat Element
var li =document.createElement('li');
// Add class
li.className ='item';
//Add id
li.id = 'items';
//Add attribut
li.setAttribute('title','new items');
//creat text Node and appeand
li.appendChild(document.createTextNode('hello world'));
//creat delite btn
var delite = document.createElement('a');
delite.className ='Delit';
//Add html
delite.innerHTML = 'X';
li.appendChild(delite);
//append li as child to ul 
document.querySelector('ul.collection').appendChild(li);;
console.log(li);
