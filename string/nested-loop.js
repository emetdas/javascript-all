// namta crate 
// single namta
var i =1;
var c =1;
while (i<=10) {
    console.log("1"+" X "+c+" = "+ i);
    c = c+1;
    i++;
}
// single namta

// namta list
for (let i = 1; i <= 10; i++) {
    for (let c = 1; c <= 10; c++) {
      var e = i * c;
      console.log(i + " X " + c + " = " + e);
    }
    console.log(" ");
  }
// namta list