import React, {useEffect, useState} from 'react';
import './Task.css';
import { Button, Form } from 'react-bootstrap';
import { ITask } from '../../api/PayloadModel';

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

    // React Hooks
    const [localState, setLocalState] = useState(task.state);
    const [isRemoving, setIsRemoving] = useState(false);

    // Event handlers ==================================================================================================
    /**
     *
     * @param event
     */
    const handleTaskRemoval = (event: any) => {
        setIsRemoving(true);

        fetch(`http://localhost:4000/tasks/${task.id}`, {
			method: 'DELETE'
		})
        .then((response) => {
            console.log(response);
            setIsRemoving(false);
        })
        .catch((error) => {
            console.log(error);
            setIsRemoving(false);
        });
    };

    /**
     *
     * @param event
     */
    const handleTaskStatusChange = (event: any) => {
        // Update the local task state
        setLocalState(event.target.value);
    };

    /**
     * Attempts to change the task's state on the server
     * Had to move to useEffect() because setLocalState hook method is asynchronous
     */
    useEffect(() => {
        // Attempt to change the task state on the server
        fetch(`http://localhost:4000/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                ...task,
                state: localState
            })
        })
        .then((response) => console.log(response))
        .catch((error) => {
            // If the task state update on the server was unsuccessful, set the local state to the previous value
            setLocalState(task.state);
        });
    }, [localState]);
    // Event handlers end ==============================================================================================

    return (
        <div className='Task-container' key={task.id}>
            <div>{task.name}</div>
            <div className='Task-detail'>
                <div>{task.description}</div>
            </div>
            <div className='Task-detail'>
                <div>Estimate: {task.estimate} hours</div>
            </div>

            {/*Status*/}
            <div>
                <Form.Group className='Task-status'>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as='select' value={localState} onChange={handleTaskStatusChange} className='Task-status-dropdown' >
                        <option>Planned</option>
                        <option>Completed</option>
                        <option>In progress</option>
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
