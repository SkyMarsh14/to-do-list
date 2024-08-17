import Task from "./addTask.js";

export default class TaskManager{

    constructor(){
        this.tasks = [];
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

    updateStatus(index){
        this.tasks[index].status = !this.tasks[index].status;
        return;
    }

    getStatus = (index) =>{
        const status = this.tasks[index].status;
        console.log(`Status for task ${index} : ${status}`);
        return status;
    }
}