import Task from "./addTask.js";

export default class TaskManager{

    constructor(){
        this.tasks = [];
        this._status = false;
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

        if(this.tasks.length===0){
            console.log("No tasks available.");
            return;
        }
        console.log(this.tasks);
    }

    updateStatus(){
        this._status = !this._status;
        return;
    }
    get status(){
        debugger;
        return  this._status?"This task is completed":"This task is uncompleted";
    }

}