
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click',function(){
  var paragraph = document.createElement('p');
  paragraph.classlost.add('paragraph-stylish');
  paragraph.innertext = inputfield.value;
  toDoContainer.appendChild(paragraph);
  inputfield.value = "";
  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dbclick',function(){
    toDoContainer.rechild(paragraph);
})
})
