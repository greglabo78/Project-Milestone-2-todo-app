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
       
    });

   

    clearCompletedTasksButton.addEventListener("click", function(el) {       

       el.preventDefault();

       clearCompletedTasks();

    });

}

   








/**
 * The createTask function creates a div element , adds a class "task"
 * creates a span elemnet for the user input  give its an id pf "span" 
 * and appends the imput to the task list
 * A validation is included in the function in an event there is no input an alert is triggred.
 * Append a checkbox to user task input
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

    task.appendChild(completedTask(taskText));

    /* Clear taskInput */
    taskInputText.value = "";

}
/**
 * This function creates a checkbox, assigns type "checkbox"
 * run an event listener that when clicked the checkbox class will be chnaged to "completed"
 * that triggers a ccs style that will strikeout the user input on the task list
 */
function completedTask(taskText) {
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("click", function() {
        taskText.classList.toggle("completed");

    });
 return taskCheckbox;
}

function editTask() {

}

function deleteTask() {

}

function clearCompletedTasks() {

}

function clearAllTasks() {

}

