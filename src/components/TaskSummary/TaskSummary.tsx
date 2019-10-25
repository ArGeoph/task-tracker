import React from 'react';
import './TaskSummary.css';
import { ITask } from '../../api/PayloadModel';

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
export const TaskSummary = (props: Props) => {
    const { tasks } = props;
    let plannedTasksEstimate: number = 0;
    let inProgressTasksEstimate: number = 0;
    let completedTasksEstimate: number = 0;

    tasks.map((task) => {
        if (task.state === 'Planned') {
            plannedTasksEstimate += parseInt(task.estimate);
        }
        else if (task.state === 'In progress') {
            inProgressTasksEstimate += parseInt(task.estimate);
        }
        else {
            completedTasksEstimate += parseInt(task.estimate);
        }
    });

    if (tasks.length > 0) {
        return (<div className='TaskSummary-container'>
            <h5>Tasks Summary</h5>
            <p>Number of all tasks: {tasks.length}</p>
            <p>All Planned Tasks Estimate: {plannedTasksEstimate} hours</p>
            <p>All In progress Tasks Estimate: {inProgressTasksEstimate} hours</p>
            <p>All Completed Tasks Estimate: {completedTasksEstimate} hours</p>
            <p>Total: {plannedTasksEstimate + inProgressTasksEstimate + completedTasksEstimate} hours</p>
        </div>);
    }
    else {
        return null;
    }
}; // End of functional component TaskList
// End of file
