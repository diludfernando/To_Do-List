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
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskPriority = document.getElementById('task-priority');
    const taskeDate = document.getElementById('task-date');
    const taskList = document.getElementById('task-list');
    const iteamsLeft = document.getElementById('items-left');

    const filterButtons = document.querySelectorAll('.filter-button');

    // log element verfication
    console.log("Form element:", taskForm);
    console.log("Filter buttons", filterButtons);

    console.log("TaskMaster app initialized"); 
 }

 // Initialize when DOM is loaded
 document.addEventListener('DOMContentLoaded', initApp);