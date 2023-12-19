import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {TaskHeader, TasksList} from "../../types";

export const fetchTask = createAsyncThunk(
    'tasks/fetch',
    async() => {
        const response = await axiosApi.get<TasksList | null>( '/tasks.json');
        const tasksData = response.data;
        if(!tasksData) {
            return [];
        }

        return Object.keys(tasksData).map(key => {
            const task = tasksData[key];
            return {
                ...task,
                id: key,
            };
        });
    });
export const createTask = createAsyncThunk (
    'tasks/create',
    async (task: TaskHeader)=> {
        await axiosApi.post('tasks.json', task);
    }
);

export const deleteTask = createAsyncThunk<void,string> (
    'tasks/delete',
    async(taskId) => {
        await axiosApi.delete('/tasks/' + taskId + '.json');
    }
);
