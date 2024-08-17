import {contentDiv,defaultProject, clearContentDiv} from '../util.js';

export default function displayInbox(){
    clearContentDiv();
    const btn = document.querySelector('.inbox');
    btn.style.backgroundColor = "red";

    defaultProject.tasks.forEach((task)=>{
        const container = document.createElement('div');
        const title = document.createElement('h1');
        const description = document.createElement('div');
        const dueDate = document.createElement('div');
        const prio = document.createElement('div');

        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = task.dueDate;
        prio.textContent = task.priority;
        contentDiv.append(container);
        container.append(title, description, dueDate, prio);
    })
}