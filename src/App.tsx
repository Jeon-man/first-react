import React from 'react';
import './App.css';
import ToDoList from '@components/ToDoList';

const App = () => {
  return (
    <>
      <div className='mainContainer'>
        <div className='appContainer'>
          <ToDoList />
        </div>
      </div>
    </>
  );
};

export default App;
