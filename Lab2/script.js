const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const statusFilter = document.getElementById('statusFilter');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
statusFilter.addEventListener('change', renderTasks);

window.onload = renderTasks();

function loadTasks() {
    const json = localStorage.getItem('tasks');
    return JSON.parse(json) || [];
}

function saveTasks(tasks) {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
}

function renderTasks() {
    const tasks = loadTasks();
    const status = statusFilter.value;

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        if (status === 'completed' && !task.completed) return;
        if (status === 'notCompleted' && task.completed) return;

        renderTask(task, index);
    });
}

function renderTask(task, index) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <input type="checkbox" class="completedCheckbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
        <span class="${task.completed ? 'completedTask' : ''}">${task.text}</span>
        <button class="deleteTaskButton" onclick="deleteTask(${index})">Удалить</button>
    `;
    taskList.appendChild(taskItem);
}

function addTask() {
    const tasks = loadTasks();
    const taskText = taskInput.value.trim();

    if (!taskText) return;

    const task = { text: taskText, completed: false };
    tasks.push(task);
    saveTasks(tasks);

    taskInput.value = '';
    renderTasks();
}

function toggleTask(index) {
    const tasks = loadTasks();
    const task = tasks[index];

    task.completed = !task.completed;
    saveTasks(tasks);

    renderTasks();
}

function deleteTask(index) {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);

    renderTasks();
}
