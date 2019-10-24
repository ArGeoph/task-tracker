import React from 'react';
import './TaskList.css';
import { Task } from '../Task/Task';
import { ITask } from '../../utils/payloadExample';

// Interfaces
interface Props {
    tasks: ITask[];
}
// Interfaces end

/**
 *
 * @param props
 * @constructor
 */
export const TaskList = (props: Props) => {
    const { tasks } = props;

    return (
        <div className='TaskList-container'>
            {tasks.map( task => <Task task={task} />)}
        </div>
    );
}; // End of functional component TaskList
// End of file
