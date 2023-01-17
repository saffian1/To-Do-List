
//capture users value in the text box
let addButton = document.querySelector("#add-button"); 
let list = document.querySelector(".list")
let userValue = document.querySelector(".itemValue")

addButton.addEventListener("click", function () {
   //create the elements
   let value = userValue.value;
   let item = document.createElement("li");
   let p = document.createElement("p");
   let a = document.createElement("a"); 
   // add values to elements
   a.href = "#";
   a.appendChild(document.createTextNode("X"));
   p.appendChild(document.createTextNode(value));
   item.appendChild(p);
   item.appendChild(a);
   list.appendChild(item);
   // add click event to remove list element
   a.addEventListener("click", function () {
      item.remove();
   }); 
});