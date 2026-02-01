/**
    * TaskMaster - A simple todo list application
    *
    * This JavaScript file contains the functionality for the TaskMaster app.
    * It allows users to create, mark complete, and delete tasks.
    */

console.log("TaskeMaster app initialized");

// Global variable for appilaction state

var taske = [];
var currentFilter = 'all';

// Global variable for DOM elements

var taskForm;
var taskInput;
var taskList;
var filterButtons;
var taskPriority;
var taskDate;
var iteamsLeft;




/**
* Updates the document title with task count
*/

function updateDocumentTitle(){

   document.title = "TaskMaster - " + taske.length + " Tasks";

}

/**
 * Handle task form submission
 * @param {Event} e - The form submission event
 */
function handleFormSubmit(e){
   e.preventDefault();

   var description = taskInput.value.trim();
   var priority = taskPriority.value;
   var date = taskDate.value;

console.log("Form submitted with tasks:", description, priority, date);

// TODO: We'll add validation and task creation in the next steps

}




 /**
    * Initialize the application
    */

 function initApp(){
    console.log("Initializing TaskMaster app");

    // TODO: Add element selection code here
     taskForm = document.getElementById('task-form');
     taskInput = document.getElementById('task-input');
     taskPriority = document.getElementById('task-priority');
     taskDate = document.getElementById('task-date');
     taskList = document.getElementById('task-list');
    iteamsLeft = document.getElementById('items-left');

     filterButtons = document.querySelectorAll('.filter-button');

    // log element verfication
    console.log("Form element:", taskForm);
    console.log("Filter buttons", filterButtons);

    //Update document title
    updateDocumentTitle();

    // Add Event Listeners
    taskForm.addEventListener("submit",handleFormSubmit);

    console.log("TaskMaster app initialized"); 
 }




 // Initialize when DOM is loaded
 document.addEventListener('DOMContentLoaded', initApp);