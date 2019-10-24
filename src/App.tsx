import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TaskList } from './components/TaskList/TaskList';
import Button from 'react-bootstrap/Button';
import { payloadExample } from './utils/payloadExample';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header text='Task Tracker' />
      <TaskList tasks={payloadExample}/>
      <div>
        <Button
            variant='secondary'
            size='lg'
            onClick={() => window.alert('Add task')}
        >
            Add New Task
        </Button>
      </div>
    </div>
  );
};

export default App;
