import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TaskList } from './components/TaskList/TaskList';
import { AddTaskModal } from "./components/AddTaskModal/AddTaskModal";
import { Button } from 'react-bootstrap';
import { payloadExample } from './utils/payloadExample';

/**
 *
 * @constructor
 */
const App: React.FC = () => {
    // React Hooks
    const [modalShow, setModalShow] = React.useState(false);

    /**
     *
     */
  return (
    <div className='App'>
      <Header text='Task Tracker' />
      <TaskList tasks={payloadExample}/>
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
