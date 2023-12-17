import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";


const Task = () => {
    const taskHeader = useSelector((state: RootState) => state.task.header);
    const dispatch: AppDispatch = useDispatch();
    return (
        <div className="Task">
            <h1>{taskHeader}</h1>
            <button>Done/Undone</button>
        </div>
    );
};

export default Task;