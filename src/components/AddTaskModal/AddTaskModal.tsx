import React, { useState } from 'react';
import './AddTaskModal.css';
import { Button, Form, Modal, Spinner } from 'react-bootstrap';

/**
 *
 * @param props
 * @constructor
 */
export const AddTaskModal = (props: any) => {
    // React Hooks
    const [ isTaskAdding, setIsAddingTask ] = useState(false);
    const [ message, setMessage] = useState('');
    const [ name, setTaskName ] = useState('');
    const [ description, setTaskDescription ] = useState('');
    const [ estimate, setTaskEstimate ] = useState(0);
    const [ state, setTaskState ] = useState('Planned');

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

        // Check if the user filled in all required fields
        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        // Set adding state to true to render spinner
        setIsAddingTask(true);

        // Try to add new task to the server
        fetch('http://localhost:4000/tasks',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({name, description, estimate, state})
            })
            .then((response) => {
                setMessage('The task has been added');
                setIsAddingTask(false);
            })
            .catch((error) => {
                setMessage('Server error occurred. Please try again later!');
                setIsAddingTask(false);
            });
    };

    const handleWindowClose = () => {
        // Clear new task addition message when user closed the modal window
        setMessage('');

        // Close the add task window
        onHide();
    };
    // Event handlers end ==============================================================================================

    /**
     *
     */
    return (
        <Modal
            onHide={handleWindowClose}
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
                        <Form.Control as='select' value={state} required onChange={(event: any) => setTaskState(event.target.value)} >
                            <option>Planned</option>
                            <option>In progress</option>
                            <option>Completed</option>
                        </Form.Control>
                    </Form.Group>

                    <div className='AddTaskModal-button-container' >
                        <Button onClick={handleWindowClose}>Close</Button>
                        {message}
                        <Button type='submit'>
                            {isTaskAdding ?
                                <Spinner animation='border' role='status'>
                                </Spinner> :
                                'Add new task'
                            }
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    ); // End of return
}; // End of AddTaskModal component
// End of file
