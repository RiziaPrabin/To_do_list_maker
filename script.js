// Add task to the list
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  const taskText = document.createTextNode(taskInput.value);

  // Create checkbox to mark task as completed
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = function () {
    taskItem.classList.toggle('completed');
  };

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function () {
    taskItem.classList.add('deleting'); // Add animation class
    setTimeout(() => {
      taskList.removeChild(taskItem);
    }, 300); // Delay to allow animation to complete
  };

  // Append checkbox, task text, and delete button to the task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field after adding the task
  taskInput.value = '';

  // Add animation to task addition
  taskItem.classList.add('task-added');
  setTimeout(() => {
    taskItem.classList.remove('task-added');
  }, 300);
}
