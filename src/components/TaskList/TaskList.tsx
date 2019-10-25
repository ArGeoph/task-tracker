import React from 'react';
import './TaskList.css';
import { Task } from '../Task/Task';
import { ITask } from '../../api/payloadExample';

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
            {tasks.map( task => <Task task={task} />)}
            {errorMessage}
        </div>
    );
}; // End of functional component TaskList
// End of file
