  document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', function(event) 
  {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
 });

  function addTask(text)
   {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `<input type="checkbox"><span>${text}</span><button id="two">Delete</button>`;

    const deleteButton = taskItem.querySelector('button');
    deleteButton.addEventListener('click', function()
    {
      taskItem.remove();
    });

    taskList.appendChild(taskItem);
  }
});
