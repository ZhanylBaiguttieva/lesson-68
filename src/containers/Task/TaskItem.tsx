
import {Task} from "../../types";
import ButtonSpinner from "../../spinner/ButtonSpinner";
import React from "react";

interface Props {
    taskItem: Task;
    deleteLoading: boolean | string;
    onDelete: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({taskItem, deleteLoading, onDelete}) => {

    return (
        <div className="card p-0 mb-1">
            <div className="row no-gutters">
                    <div className="card-body">
                        <p className="card-title fs-4">{taskItem.header}</p>
                        <label className="fs-7 mb-2" htmlFor="status">Done/Undone</label>
                            <input className='m-2' type="checkbox" id="status" name="status" value="status"/>
                        <p className="align-content-end">
                            <button
                                className="btn btn-danger"
                                onClick={onDelete}
                                disabled={deleteLoading ? deleteLoading === taskItem.id : false}
                            >
                                {deleteLoading && deleteLoading === taskItem.id && (<ButtonSpinner/>)}
                                Delete</button>
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default DishItem;