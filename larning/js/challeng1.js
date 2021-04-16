var scorrJhon = (89 + 120 + 103) / 3;
var scorrMark = (116 + 94 + 123) / 3;

console.log(scorrJhon, scorrMark);

if(scorrJhon > scorrMark){
    console.log('Jhon\'s team wins with' + scorrJhon +'points');
}
else if (scorrMark > scorrJhon){
    console.log('Mark\'s team wins with ' + scorrMark + ' points');
}

else{
    console.log('There is draw');
}