export const contentDiv = document.querySelector('main');

const defaultProject = new Project;
defaultProject.name = "default";

const projects = [defaultProject];

function addProject(projectName){
    const project = new Project;
    project.name = projectName;
    projects.push(project);
}