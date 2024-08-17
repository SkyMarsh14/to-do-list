import TaskManager from "./TaskManager"

export default class Project extends TaskManager{
    constructor(project){
        super();
        this.project = project;
    }
}