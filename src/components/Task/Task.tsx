import React from 'react';
import './Task.css';
import { Form } from 'react-bootstrap';
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
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderTop: '1px solid grey'}}>
                <div>{task.description}</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderTop: '1px solid grey'}}>
                <div>Estimate: </div>
                <div>{task.estimate} hours</div>
            </div>
            {/*Status*/}
            <div>
                <Form.Group style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTop: '1px solid grey'}}>
                    <Form.Label style={{display: 'flex', textAlign: 'center'}}>Status</Form.Label>
                    <Form.Control as='select' style={{width: '70%'}} >
                        <option>Planned</option>
                        <option>In progress</option>
                        <option>Completed</option>
                    </Form.Control>
                </Form.Group>
            </div>
        </div>
    );
}; // End of functional component Task
// End of file
