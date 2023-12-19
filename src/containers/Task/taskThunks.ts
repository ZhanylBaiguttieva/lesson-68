import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiTask, TasksList} from "../../types";
import {RootState} from "../../app/store";

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
    async (task: ApiTask)=> {
        await axiosApi.post('tasks.json', task);
    }
);

export const deleteTask = createAsyncThunk<void,string> (
    'tasks/delete',
    async(taskId) => {
        await axiosApi.delete('/tasks/' + taskId + '.json');
    }
);

export const changeTaskStatus = createAsyncThunk<void, string, {state: RootState}>(
    'task/change',
    async(id, thunkAPI) => {
        const currentTask = thunkAPI.getState().task.data;
        const currentUpdatedTask = currentTask.find(task => task.id === id);

        if(!currentUpdatedTask) {
            return;
        } else {
            const updatedTask: ApiTask = {
                header: currentUpdatedTask.header,
                status: !currentUpdatedTask.status,
            };
            await axiosApi.put('/tasks/' + id + '.json', updatedTask);
        }
    }
);
