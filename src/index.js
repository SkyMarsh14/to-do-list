import "./styles.css";
import Project from "./project.js";
import { defaultProject,projects } from "./util.js";
import displayInbox from "./tabs/inbox.js";

defaultProject.addTask("Coding", 'learn linux command line','none');
defaultProject.addTask("learn EN", 'read English books', 'none', 'low');


const inboxBtn = document.querySelector('.inbox');
inboxBtn.addEventListener("click",()=>displayInbox());

