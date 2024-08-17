import Project from "./project.js";
export const contentDiv = document.querySelector('main');
export const defaultProject = new Project;
export const projects = [defaultProject];

defaultProject.name = "default";
function addProject(projectName){
    const project = new Project;
    project.name = projectName;
    projects.push(project);
}

