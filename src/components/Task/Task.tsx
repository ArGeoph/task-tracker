import React from 'react';
import './Task.css';
import { ITask } from '../../utils/payloadExample';

// Interfaces
interface Props {
    task: ITask;
}
// Interfaces end

/**
 *
 * @param props
 * @constructor
 */
export const Task = (props: Props) => {
    const { task } = props;

    return (
        <div className='Task-container'>
            <div>{task.name}</div>
            <div>{task.description}</div>
            <div>{task.estimate}</div>
            <div>{task.state}</div>
        </div>
    );
}; // End of functional component Task
// End of file
