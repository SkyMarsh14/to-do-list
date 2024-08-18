import { defaultProject,projects, addProject} from "./util.js";

const projectDialog = document.querySelector('.project-dialog');
const taskDialog = document.querySelector('.task-dialog');

const addProjectBtn = document.querySelector('.add-project');
const addTaskBtn = document.querySelector('.addTask');

addProjectBtn.addEventListener("click",()=>{
    projectDialog.showModal();
})

addTaskBtn.addEventListener("click",()=>{
    taskDialog.showModal();
})

const taskForm = document.querySelector('.task-dialog');

taskForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const prio = document.querySelector('#prio').value;

    defaultProject.addTask(title,description,dueDate,prio);

    taskDialog.close();
})

export {addProjectBtn, addTaskBtn, taskForm};