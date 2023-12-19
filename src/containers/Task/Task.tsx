
import {useEffect} from "react";
import {changeTaskStatus, deleteTask, fetchTask} from "./taskThunks";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDeleteTaskLoading, selectFetchTaskLoading, selectTask} from "./taskSlice";
import Spinner from "../../spinner/Spinner";
import TaskItem from "./TaskItem";


const Task = () => {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectTask);
    const deleteLoading = useAppSelector(selectDeleteTaskLoading);
    const dishesLoading = useAppSelector(selectFetchTaskLoading);

    useEffect(() => {
        dispatch(fetchTask());
    }, [dispatch]);

    const removeTask = async (id: string) => {
        await dispatch(deleteTask(id));
        await dispatch(fetchTask());
    };
    const changeStatus = async(id: string) => {
       await dispatch(changeTaskStatus(id));
       await dispatch(fetchTask());
    };


    return (
        <>
            <h4>ToDo List: </h4>
            {dishesLoading ? <Spinner/> : tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    taskItem={task}
                    deleteLoading = {deleteLoading}
                    onDelete={() => removeTask(task.id)}
                    onChange={() => changeStatus(task.id)}
                />
            ))}
        </>
    );
};

export default Task;