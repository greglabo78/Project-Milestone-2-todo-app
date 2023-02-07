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

   

    clearAllTasksButton.addEventListener("click", function(el) {       

       el.preventDefault();

       clearAllTasks();

    });

}

   










function createTask() {

}

function completedTask() {

}

function editTask() {

}

function deleteTask() {

}

function clearCompletedTasks() {

}

function clearAllTasks() {

}