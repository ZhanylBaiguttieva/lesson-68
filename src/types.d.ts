export interface Task {
    id: string;
    header: string;
    status: false;
}

export type ApiTask = Omit<Task, 'id'>;

export type TaskHeader = Omit<ApiTask, 'status'>

export interface TasksList {
    [id:string]: TaskHeader;
}