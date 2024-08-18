import "./styles.css";
import Project from "./project.js";
import { defaultProject,projects, addProject} from "./util.js";
import displayInbox from "./tabs/inbox.js";
import displayUpcoming from "./tabs/upcoming.js";
import  "./tab-switch.js";

defaultProject.addTask("Coding", 'learn linux command line','none');
defaultProject.addTask("learn EN", 'read English books', 'none', 'low');

const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener("click",()=>)

const inboxBtn = document.querySelector('.inbox');
inboxBtn.addEventListener("click",()=>displayInbox());

const upcomingBtn = document.querySelector('.upcoming');
upcomingBtn.addEventListener("click",()=>displayUpcoming());
