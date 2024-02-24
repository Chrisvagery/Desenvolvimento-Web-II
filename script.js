document.getElementById("addButton").addEventListener("click", function () {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    taskList.appendChild(createElementLi(taskText));

    taskInput.value = "";

    var lista = JSON.parse(localStorage.getItem("tarefas")) || [];
    lista.push(taskText)
    localStorage.setItem("tarefas", JSON.stringify(lista));
  }
});


window.addEventListener('DOMContentLoaded', function() {
  var lista = JSON.parse(localStorage.getItem("tarefas")) || [];
  var taskList = document.getElementById("taskList");
  console.log(lista);

  lista.forEach(function(item) {
    taskList.appendChild(createElementLi(item));
  })
})


function createElementLi(item) {
  var li = document.createElement("li");
  li.innerHTML = item + ' <button class="deleteButton">X</button>';
  li.querySelector(".deleteButton").addEventListener("click", function () {
    taskList.removeChild(li);

    var removeElemento = JSON.parse(localStorage.getItem("tarefas")) || [];
    var index = removeElemento.indexOf(item);
    if (index !== -1) {
      removeElemento.splice(index, 1);
      localStorage.setItem("tarefas", JSON.stringify(removeElemento));
    }
    
    taskList.removeChild(li);
    
  });
  return li
}