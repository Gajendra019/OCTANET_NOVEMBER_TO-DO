function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
  
    if (taskText.trim() !== "") {
      var tasksList = document.getElementById("tasks");
      var listItem = document.createElement("li");
      listItem.innerHTML = taskText + '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
      tasksList.appendChild(listItem);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function deleteTask(element) {
    element.parentElement.remove();
  }
  