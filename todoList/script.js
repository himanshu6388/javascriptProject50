
const taskInput = document.getElementById('taskInput');
const addTaskBtn= document.getElementById('addTaskBtn');
const  taskList = document.getElementById('taskList');

function addTask(){
    const taskText= taskInput.value.trim();

    if(taskText === '') return;

    const li  = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function(){
        taskList.removeChild = (li);
    }

    
// append the delete  button to the list item

li.appendChild(deleteBtn);

// Toggle  completion  status

li.onclick = function(){
    li.classList.toggle('comleted');
}

// Add the new task to  the li
taskList.appendChild(li);
// clear input
taskInput.value = '';
}
// event  listener  for the add task button

addTaskBtn.addEventListener('click', addTask);

// optionally allowing for presssing the enter buttton
taskInput.addEventListener('keypress',function(e){
    if(e.key=== 'Enter'){
        addTask();
    }
})