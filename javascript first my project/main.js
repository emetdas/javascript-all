// Delete Functianality
var list = document.querySelector('#list ul');

list.addEventListener('click',function(e){
    // if statement
    if(e.target.className == 'delite'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});
// Add Functianality
const addlist =document.forms['additems'];
    addlist.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addlist.querySelector('input[type="text"]').value;
    // Creat-Elements
    const li = document.createElement('li');
    const listName = document.createElement('span');
    const listDelet = document.createElement('span');
    // Add contant
    listDelet.textContent ='Remove';
    listName.textContent = value;
    // Add class
    listName.classList.add('name');
    listDelet.classList.add('delite');
    // Appent Dom
    li.appendChild(listName);
    li.appendChild(listDelet);
    list.appendChild(li);
});

// Hide list 
const hideList = document.querySelector('#check');
    hideList.addEventListener('change', function(e){
    if(hideList.checked){
        list.style.display = "none";
    }
    else{
        list.style.display = "initial";
    }
    });

// Serch Event add Filter
const searchBar = document.forms['search'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const lists = list.querySelectorAll('li');
    Array.from(lists).forEach(function(list){
        const title = list.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!= -1){
            list.style.display = 'block';
        }
        else{
            list.style.display = 'none'; 
        }
    })
})

// // get item from localstorage
// let data = localStorage.getItem("list");

// // check if data is not empty
// if(data){
//     list = JSON.parse(data);
//     id = list.length; // set the id to the last one in the list
//     Lodelist(list); // load the list to the user interface
// }else{
//     // if data isn't empty
//     list = [];
//     id = 0;
// }

// // clear the local storage
// list.addEventListener("click", function(){
//     localStorage.clear();
//     location.reload();
// });

// localStorage.setItem("list", JSON.stringify(list));