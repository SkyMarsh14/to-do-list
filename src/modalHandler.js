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

export {addProjectBtn, addTaskBtn};