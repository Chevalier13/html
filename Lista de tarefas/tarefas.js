document.getElementById('addTaskButton').onclick = function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.textContent = taskText;
    
    li.onclick = function() {
      li.classList.toggle('completed');
      li.classList.add('animate-complete');
      setTimeout(() => {
        li.classList.remove('animate-complete');
      }, 300);
    };
    
    const removeButton = document.createElement('button');
    removeButton.textContent = '🗑️';
    removeButton.onclick = function(e) {
      e.stopPropagation();
      li.classList.add('animate-remove');
      setTimeout(() => {
        taskList.removeChild(li);
      }, 300);
    };
    
    li.appendChild(removeButton);
    li.classList.add('animate-add'); // Adiciona classe de animação ao adicionar
    taskList.appendChild(li);
    taskInput.value = '';
  }
};
