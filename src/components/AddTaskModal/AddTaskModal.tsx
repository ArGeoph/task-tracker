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

        // TODO: Dispatch Redux action for adding a new task

        // Close the Add Task Modal
        onHide();
    };
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
                <Modal.Title id='contained-modal-title-vcenter'>
                    Add New Task
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formTaskName'>
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>

                    <Form.Group controlId='formTaskDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' rows='5' placeholder='Optional' />
                    </Form.Group>

                    <Form.Group controlId='formTaskDescription'>
                        <Form.Label>Estimate</Form.Label>
                        <Form.Control type='number' min={0} defaultValue={0} required />
                    </Form.Group>

                    <Form.Group controlId='formTaskStatus'>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as='select' required >
                            <option>Planned</option>
                            <option>In progress</option>
                            <option>Completed</option>
                        </Form.Control>
                    </Form.Group>

                    <div style={{display: 'flex', justifyContent: "space-between"}}>
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
