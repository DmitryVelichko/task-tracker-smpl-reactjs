import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

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

  // Add Task

  const addTask = (task) => {
    console.log(task);
  }

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder

    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


  return ( 
    <div className="container">
     <Header title="Task Tracker"/>
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;