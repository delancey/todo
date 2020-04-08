
// Show an unordered list of todo's
// • Show an input to enter a new todo
// • Show a button to add a todo. When the button is clicked:
// • The text from the input box is used to add a list item to the  bottom of the list
// • The text from the input box is cleared out.
// • When the user clicks on a list item, it is removed



var ul = document.querySelector('ul');
var li = document.querySelector('li');
var input = document.querySelector('input');
var btn = document.querySelector('button');


var addition = btn.addEventListener('click',function () {
    var addItem = document.createElement('li');
    addItem.innerHTML= input.value;
  
   ul.appendChild(addItem);     // Append 
   //The text from the input value is cleared out
   input.value = "";
   
} )

ul.addEventListener("click",function(e) {
    var tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {    
      tgt.parentNode.removeChild(tgt); // or tgt.remove();
    }
  });   
    
  