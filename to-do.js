
//capture users value in the text box
let addButton = document.querySelector("#add-button"); 
let list = document.querySelector(".list")
let userValue = document.querySelector(".itemValue")
let itemCount = document.querySelector(".number-items")

$(document).ready(function(){
   $("#hide").click(function(){
     $("h3").slideUp();
   });
   $("#show").click(function(){
      $("h3").slideDown();
   });

   $("#feedback").click(validateName);
});

function validateName() {
   let nameAnswer = prompt("whats your name");
   if (nameAnswer.validity.tooLong) {
      document.open();
      document.write("Name must be between 2-8 characters in length!")
      document.close();
   } else if (nameAnswer.validity.tooShort) {
      document.open();
      document.write("Name must be between 2-8 characters in length!")
      document.close();
   } else {
      document.open();
      document.write("Thank you for submitting your name!")
      document.close();
   } 
 }
let numberOfItems = 0
addButton.addEventListener("click", function () {
   //create the elements
   let value = userValue.value;
   let item = document.createElement("li");
   let p = document.createElement("p");
   let a = document.createElement("a"); 
   let colour = document.createElement("a");

   // add values to elements
   a.href = "#";
   a.classList.add("delete");
   colour.classList.add("change-colour")
   a.appendChild(document.createTextNode("X"));
   p.appendChild(document.createTextNode(value));
   item.classList.add("item");
   item.appendChild(p);
   item.appendChild(a);
   item.appendChild(colour);
   list.appendChild(item);
   // add click event to remove list element
   a.addEventListener("click", function () {
      item.remove();
   }); 

   colour.addEventListener("click", function () {
      p.style.backgroundColor = "yellow";
   }); 
   numberOfItems++;
   itemCount.innerText = numberOfItems;
});

