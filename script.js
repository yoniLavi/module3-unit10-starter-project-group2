const tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const listCounter = document.getElementById("listCounter");

addBtn.addEventListener("click", addTask);

function addTask() {
    const value = taskInput.value
    tasks.push(value)
    render()
}



function render() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];
        taskList.appendChild(li);
    }
    listCounter.textContent = "Tasks: " + tasks.length;
}
