//creat body
var bodyElement =document.body;

//creat Card Element
var Card =document.createElement('div');
var imageContanir =document.createElement('div');
var Image =document.createElement('img');
var textContanir =document.createElement('div');
var heading =document.createElement('h2');
var paragraph =document.createElement('p');
var btn =document.createElement('a');

//add class
Card.className ='card-contanir';
imageContanir.className ='image-div';
Image.className ='image-random';
textContanir.className ='text-contanir';
btn.className ='btn';

//setattribut 
Image.src = "https://source.unsplash.com/random/food";
Image.setAttribute("alt","random unsplash api");
btn.setAttribute("href","#");
heading.innerText ="Random Nature image";
paragraph.innerText ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, ut.";
btn.innerText ="Add To Card";
//Append body
bodyElement.appendChild(Card);
Card.append(imageContanir, textContanir);

imageContanir.appendChild(Image);
textContanir.append(heading , paragraph , btn);

// document.write(Image);
// console.log(Image);

