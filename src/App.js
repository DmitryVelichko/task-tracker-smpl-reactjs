import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting with Kate',
        day: 'May 7th at 1.00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting with Mary',
        day: 'May 8th at 2.00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Meeting with Ann',
        day: 'May 9th at 1.00am',
        reminder: false,
    },
]);

// Delete Task

  const deleteTask = (id) => {
    console.log('delete', id)
  }


  return ( 
    <div className="container">
     <Header title="Task Tracker"/>
     <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;