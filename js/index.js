var box = document.getElementById("display");
//To see text and add numbers while pressing; also enable the clearing function
function addtoScreen(x) {
  box.value += x;
  if (x === "C") {
    box.value = "";
  }
}
//to enable de answer function when pressing equal button
function answer() {
  x = box.value;
  x = eval(x);
  box.value = x;
}
//enable the power button
function power() {
  x = box.value;
  x = eval(x*x);
  box.value = x;
}
//note: Make a Math.sqrt(x) function to a button later on
//enable backspace buton
function backspace() {
  var num = box.value;
  var len = num.length - 1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}