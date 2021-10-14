var displayNum = "",
storedNum = "",
operation = 0,
calculationFinished = false;

function press_value(num){
      var display = document.getElementById("display");
      if (  (display.value == "0") && (num == "0")  )  
         {
          return;
         }
      else if(display.value == "0" || calculationFinished == true){
        display.value = num;
        calculationFinished = false;
        }
      else if(display.value.length>40){
        display.value = "out of range. Plz press AC to clear.";
        }
      else {
            display.value += num;
           }
}

function insertDecimal(dec) {
   // Select the calculator's display
   var display = document.getElementById("display");

        // Loop through the current number to make sure there isn't already a decimal
    for (i = 0; i < display.value.length; i++)
          if (display.value.charAt(i) == '.') {
                // If there is, do nothing
                return;
            }
        // If there isn't add a decimal to the end of the displayed number
            display.value += dec;
}

function setOperation(command) {
var display = document.getElementById("display"),
        displayNum = display.value;
   
if (operation == 0) {
    storedNum = display.value;
}
else if (operation == 1) {
    storedNum = Number(storedNum) + Number(displayNum);
}
else if (operation == 2) {
    storedNum = Number(storedNum) - Number(displayNum);
}
else if (operation == 3) {
    storedNum = Number(storedNum) * Number(displayNum);
}
else if (operation == 4) {
    storedNum = Number(storedNum) / Number(displayNum);
}
// Check what command was put into the calculator
if (command == '+') {
    operation = 1;
}
else if (command == '-') {
    operation = 2;
}
else if (command == '*') {
    operation = 3;
}
else if  (command == '/') {
    operation = 4;
}
// Clear the display in order to receive a new number
display.value = '';
}

function calculate() {
// Select the calculator's display
var display = document.getElementById("display");
        displayNum = display.value;

// Do the math
if (operation == 1) {
    displayNum = Number(storedNum) + Number(displayNum);
}
else if (operation == 2) {
    displayNum = Number(storedNum) - Number(displayNum);
}
else if (operation == 3) {
    displayNum = Number(storedNum) * Number(displayNum);
}
else if (operation == 4) {
    displayNum = Number(storedNum) / Number(displayNum);
}
// Change display to the answer
display.value = displayNum;

// Clear all the global variables
operation = 0;
displayNum = "";
storedNum = "";
calculationFinished = true;
}

function cancel(){
  displayNum = "";
  storedNum = "";
  operation = 0;    
  document.getElementById("display").value=displayNum;
}

function del(){
 document.getElementById("display").value=
 document.getElementById("display").value.slice(0,-1);
}