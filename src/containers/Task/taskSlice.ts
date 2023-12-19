import {createSlice} from "@reduxjs/toolkit";

import {Task} from "../../types";
import {deleteTask, fetchTask} from "./taskThunks";
import {RootState} from "../../app/store";

interface TaskState {
    data: Task[];
    // status: boolean;
    fetchLoading: boolean;
    deleteLoading: false | string,
}

const initialState: TaskState = {
    data: [],
    // status: false,
    fetchLoading: false,
    deleteLoading: false,
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.pending,(state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchTask.fulfilled,(state, {payload: data}) => {
            state.data = data;
            state.fetchLoading = false;
        });
        builder.addCase(fetchTask.rejected,(state) => {
            state.fetchLoading = false;
        });

        builder.addCase(deleteTask.pending, (state, {meta}) => {
            state.deleteLoading = meta.arg;
        });

        builder.addCase(deleteTask.fulfilled, (state) => {
            state.deleteLoading = false;
        });

        builder.addCase(deleteTask.rejected, (state) => {
            state.deleteLoading = false;
        });
    }
});

export const taskReducer = taskSlice.reducer;
export const selectTask = (state: RootState) => state.task.data;
export const selectFetchTaskLoading = (state: RootState) => state.task.fetchLoading;
export const selectDeleteTaskLoading = (state: RootState) => state.task.deleteLoading;

