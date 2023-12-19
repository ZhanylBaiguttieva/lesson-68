export interface Task {
    id: string;
    header: string;
    status: boolean;
}

export type ApiTask = Omit<Task, 'id'>;

export interface TasksList {
    [id:string]: ApiTask;
}