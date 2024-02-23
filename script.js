document.getElementById("addButton").addEventListener("click", function () {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = taskText + ' <button class="deleteButton">X</button>';
    taskList.appendChild(li);

    taskInput.value = "";

    li.querySelector(".deleteButton").addEventListener("click", function () {
      taskList.removeChild(li);
    });
  }
});
