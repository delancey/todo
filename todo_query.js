
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


//add item on click
//when button is clicked the value of the input
//is appended to the end of the li items
//then the input box is cleared

$(btn).click(function(){
    $('ul').append($('<li>', {
         text: $('#addition').val()
    }));
    $('#addition').val('');
});


// created addition variable to hold event listener
// used addItem variable to create the new element
// retrieved input value from input element
// appended list item to end of list
//cleared input value

/* var addition = btn.addEventListener('click',function () {
    var addItem = document.createElement('li');
    addItem.innerHTML= input.value;
  
   ul.appendChild(addItem);     // Append 
   //The text from the input value is cleared out
   input.value = "";
   
}); */


//targeting the unordered list
//on click of a list item, add strikethrough to item then remove from list.
//right now only removes one item from list

$( 'ul').on( 'click', 'li', function(e) {
 
  let target = e.target;  //easy reference for the release function event
  $(this).css('text-decoration', 'line-through');

  function release(){ 
    (target).remove();
 };
  setTimeout(release, 500);

});


// added click event listener
// set variable to target the event
// check equivalency of tag name to ensure it's a list item
// upon confirmation removed item from list

/* ul.addEventListener("click",function(e) {
    var tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
      tgt.parentNode.removeChild(tgt); // or tgt.remove();
    }
  });   */ 
    
  