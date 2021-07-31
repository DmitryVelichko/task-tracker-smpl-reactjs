import React from 'react';
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';


function App() {
  return (
    <div className="container">
     <Header title="Task Tracker"/>
     <Tasks />
    </div>
  );
}

export default App;