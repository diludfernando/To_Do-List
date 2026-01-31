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
    * Initialize the application
    */

 function initApp(){
    console.log("Initializing TaskMaster app");

    // TODO: Add element selection code here

    console.log("TaskMaster app initialized"); 
 }

 // Initialize when DOM is loaded
 document.addEventListener('DOMContentLoaded', initApp);