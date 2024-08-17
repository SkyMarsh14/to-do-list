import Project from "./project.js";
import addNewProject from "./createNewProject.js";

const defaultProject = new Project;
defaultProject.name = "default";

const projects = [defaultProject];

function newProject(projectName){
    const project = new Project;
    project.name = projectName;
    projects.push(project);
}

newProject("JP learning");
debugger;