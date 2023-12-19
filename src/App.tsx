import './App.css';
import Task from "./containers/Task/Task";
import TaskForm from "./containers/TaskForm/TaskForm";
import {TaskHeader} from "./types";
import {useAppDispatch} from "./app/hooks";
import {useEffect} from "react";
import {createTask, fetchTask} from "./containers/Task/taskThunks";

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTask());
    }, [dispatch]);
    const addNewTask = async (task: TaskHeader) => {
        await dispatch(createTask(task));
        await dispatch(fetchTask());
    };

  return (
    <div>
      <Task/>
      <TaskForm onSubmit={addNewTask}/>
    </div>
  );
}

export default App;
