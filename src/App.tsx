import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TaskSummary } from './components/TaskSummary/TaskSummary';
import { TaskList } from './components/TaskList/TaskList';
import { AddTaskModal } from './components/AddTaskModal/AddTaskModal';
import { Button } from 'react-bootstrap';

/**
 *
 * @constructor
 */
const App = () => {

    // React Hooks
    const [modalShow, setModalShow] = React.useState(false);
    const [tasks, setTasks] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState('');

    useEffect(() => {
        fetchTasks();
    });
    // React Hooks end

    const fetchTasks = () => {
        fetch('http://localhost:4000/tasks')
        .then((response) => response.json())
        .then((tasks) => {
            setTasks(tasks);

            if (tasks.length === 0) {
                setErrorMessage('You don\'t have tasks');
            }
        })
        .catch((error: Error) => setErrorMessage(`${error.message} tasks from the server. Please try again later.`));
    };

    /**
     *
     */
    return (
        <div className='App'>
            <Header text='Task Tracker' />
            <div>
                <TaskSummary tasks={tasks} />
                <TaskList errorMessage={errorMessage} tasks={tasks} />
            </div>
            <Button
                variant='primary'
                size='lg'
                onClick={() => setModalShow(true)}
            >
                Add New Task
            </Button>
            <AddTaskModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </div>
    ); // End of return
}; // End of App component

export default App;
// End of file
