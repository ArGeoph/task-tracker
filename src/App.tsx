import React, { useEffect, Suspense } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TaskList } from './components/TaskList/TaskList';
import { AddTaskModal } from './components/AddTaskModal/AddTaskModal';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTasksBegin } from './state/actions/actions';

/**
 *
 * @constructor
 */
const App = (props: any) => {

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
                tasks.length > 0 ? setTasks(tasks) : setErrorMessage('You don\'t have tasks');
            })
            .catch((error: Error) => setErrorMessage(`${error.message} tasks from the server. Please try again later.`));
    };

    /**
     *
     */
    return (
        <div className='App'>
            <Header text='Task Tracker' />

            <Suspense fallback={<div>Loading....</div>}>
                <TaskList errorMessage={errorMessage} tasks={tasks} />
            </Suspense>

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


// Redux related code
const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    onFetchBegin: () => dispatch(fetchTasksBegin())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// End of file
