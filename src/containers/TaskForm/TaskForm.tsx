import React, {useState} from "react";
import {TaskHeader} from "../../types";

interface Props{
    onSubmit: (task: TaskHeader) => void;
}
const TaskForm: React.FC<Props> = ({onSubmit}) => {
    const [newTask, setNewTask] = useState({
        header: '',
    });

    const changeTask = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewTask((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            ...newTask,
        });
    };

    const form = (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="Task">Description:</label>
                <input
                    id="task" type="text" name="header" required
                    className="form-control"
                    value={newTask.header}
                    onChange={changeTask}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add new task</button>
        </form>
    );
    return (
        <div>
            {form}
        </div>
    );
};

export default TaskForm;