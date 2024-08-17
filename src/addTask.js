export default class Task{
    description='none';
    priority = 'normal';
    dueDate = null;

    constructor(title, description, dueDate, priority){
        this.title = title,
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};