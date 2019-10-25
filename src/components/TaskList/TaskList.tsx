import React from 'react';
import './TaskList.css';
import { Task } from '../Task/Task';
import { ITask } from '../../api/PayloadModel';

// Interfaces
interface Props {
    tasks: ITask[];
    errorMessage: string;
}
// Interfaces end

/**
 *
 * @param props
 * @constructor
 */
export const TaskList = (props: Props) => {
    const { errorMessage, tasks } = props;

    return (
        <div className='TaskList-container'>
            {tasks.length > 0 ?
                <>
                    <h5> List of tasks</h5>
                    {tasks.map( task => <Task key={task.id} task={task} />)}
                </> :
                errorMessage
            }
        </div>
    );
}; // End of functional component TaskList
// End of file
