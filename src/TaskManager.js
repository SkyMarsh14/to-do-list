import Task from "./addTask.js";

export default class TaskManager{

    constructor(){
        this.task = [];
    }

    addTask(){

        let title = prompt("title");
        let description = prompt("description");
        let dueDate = prompt("due date");
        let prio = prompt("priority");

        const task = new Task(title,description, dueDate, prio);
        
        this.tasks.push(task);
    }

    printTask(){
        console.log(this.task);
    }
}