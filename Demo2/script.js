// Select elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add event listener for adding tasks
addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        // Create new list item
        const listItem = document.createElement('li');
        
        // Create text node for the task
        const taskNode = document.createTextNode(taskText);
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        
        // Append task text and delete button to the list item
        listItem.appendChild(taskNode);
        listItem.appendChild(deleteBtn);
        
        // Append list item to the task list
        taskList.appendChild(listItem);
        
        // Clear input
        taskInput.value = '';
    }
}
