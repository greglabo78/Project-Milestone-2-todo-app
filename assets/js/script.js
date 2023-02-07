const form = document.getElementById("form");

// Wait for the DOM to finish loading before loading before running the ToDo application

//Get the button Elements and add event listners to them

 

document.addEventListener("DOMContentLoaded", function() {

    bindButtonEvents();

});

function bindButtonEvents() {

    const addTaskButton = document.getElementById("add-task");

    const clearCompletedTasksButton = document.getElementById("clear-completed-tasks");

    const clearAllTasksButton = document.getElementById("clear-all-tasks");

   

    addTaskButton.addEventListener("click", function(el) {

       el.preventDefault();

       createTask();   
       
       completedTask();

    });

   

    clearCompletedTasksButton.addEventListener("click", function(el) {       

       el.preventDefault();

       clearCompletedTasks();

    });

   

    clearAllTasksButton.addEventListener("click", function(el) {       

       el.preventDefault();

       clearAllTasks();

    });

    
}

   








/**
 * The createTask function creates a div element , adds a class "task"
 * creates a span elemnet for the user input  give its an id pf "span" 
 * and appends the imput to the task list
 * A validation is included in the function in an event there is no input an alrt is triggred.
 */


function createTask() {
    const taskInputText = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInputText.value < 1) {
        alert("Please enter a task name");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const taskText = document.createElement("span");
    taskText.setAttribute("id", "span");
    taskText.textContent = taskInputText.value;
    task.appendChild(taskText);
    taskList.appendChild(task);

    /* Clear taskInput */
    taskInputText.value = "";

}

function completedTask() {
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    task.Text.classList.toggle("completed");
    task.appendChild(taskCheckbox);

}

function editTask() {

}

function deleteTask() {

}

function clearCompletedTasks() {

}

function clearAllTasks() {

}

