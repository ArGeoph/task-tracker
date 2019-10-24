import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TaskList } from "./components/TaskList/TaskList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header text='Task Tracker' />
      <TaskList text="Test"/>
    </div>
  );
};

export default App;
