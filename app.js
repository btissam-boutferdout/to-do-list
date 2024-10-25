let inputField = document.getElementById("inputField");
let AddToButton = document.getElementById("addToDo");
let AddToContainer = document.getElementById("container");
//
//
AddToButton.addEventListener("click", function () {
  //
  if (inputField.value == "") {
    alert("Enter your task !!!");
    return;
  }

  let para = document.createElement("p");
  para.className = "para-para";
  para.innerHTML = inputField.value;
  AddToContainer.appendChild(para);
  inputField.value = "";
  //
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";
  //icon.style.color = "red";
  para.appendChild(icon);
  //
  //
  icon.addEventListener("mouseover", function () {
    para.style.cursor = "pointer";
  });
  icon.addEventListener("click", function () {
    AddToContainer.removeChild(para);
  });
});
