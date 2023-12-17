import {createSlice} from "@reduxjs/toolkit";

interface TaskState {
    header: string;
    status: boolean;
}

const initialState: TaskState = {
    header: '',
    status: false,
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
    },
});

export const taskReducer = taskSlice.reducer;
// export const {
//
// } = taskSlice.actions;

