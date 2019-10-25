import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

/**
 *
 * @param props
 * @constructor
 */
export const AddTaskModal = (props: any) => {
    // React Hooks
    const [ isTaskAdding, setIsAddingTask ] = useState(false);
    const [ name, setTaskName ] = useState('');
    const [ description, setTaskDescription ] = useState('');
    const [ estimate, setTaskEstimate ] = useState(0);
    const [ status, setTaskStatus ] = useState('');


    // Extract required variables from props
    const { onHide, show } = props;

    // Event handlers ==================================================================================================
    /**
     *
     * @param event
     */
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();

        console.log(event);
        // Check if the user filled in all required fields
        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        // Try to add new task to the server
        fetch('http://localhost:4000/tasks',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({name, description, estimate, status})
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => { console.log(error) })
    };

    // const handleChange = (event) => {
    //
    // };
    // Event handlers end ==============================================================================================

    /**
     *
     */
    return (
        <Modal
            onHide={onHide}
            show={show}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add New Task
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formTaskName'>
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type='text' required onChange={(event: any) => setTaskName(event.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId='formTaskDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' rows='5' placeholder='Optional task description' onChange={(event: any) => setTaskDescription(event.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId='formTaskEstimate'>
                        <Form.Label>Estimate</Form.Label>
                        <Form.Control type='number' min={0} defaultValue={0} required onChange={(event: any) => setTaskEstimate(event.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId='formTaskStatus'>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as='select' required onChange={(event: any) => setTaskStatus(event.target.value)} >
                            <option>Planned</option>
                            <option>In progress</option>
                            <option>Completed</option>
                        </Form.Control>
                    </Form.Group>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button onClick={onHide}>Cancel</Button>
                        <Button type='submit'>
                            Add task
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    ); // End of return
}; // End of AddTaskModal component
// End of file
