import React from 'react';
import './Task.css';
import {Button, Form} from 'react-bootstrap';
import { ITask } from '../../api/payloadExample';

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

    // Event handlers ==================================================================================================
    /**
     *
     * @param event
     */
    const handleTaskRemoval = (event: any) => {
        // TODO: Dispatch Redux action for adding a new task
    };
    // Event handlers end ==============================================================================================

    return (
        <div className='Task-container' key={task.id}>
            <div>{task.name}</div>
            <div className='Task-detail'>
                <div>{task.description}</div>
            </div>
            <div className='Task-detail'>
                <div>Estimate: </div>
                <div>{task.estimate} hours</div>
            </div>
            {/*Status*/}
            <div>
                <Form.Group className='Task-status'>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as='select' value={task.state} style={{width: '70%'}} >
                        <option>Planned</option>
                        <option>In progress</option>
                        <option>Completed</option>
                    </Form.Control>
                </Form.Group>
            </div>
            {/*Remove Task Button*/}
            <div>
                <Button onClick={handleTaskRemoval}>
                    Remove
                </Button>
            </div>
        </div>
    );
}; // End of functional component Task
// End of file
