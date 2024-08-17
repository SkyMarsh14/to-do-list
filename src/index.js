import "./styles.css";
import Project from "./project.js";

const defaultProject = new Project;
defaultProject.name = "default";

const projects = [defaultProject];

function addProject(projectName){
    const project = new Project;
    project.name = projectName;
    projects.push(project);
}
