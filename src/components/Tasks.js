import React, { useState } from 'react';

const Tasks = () => {
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
        ])

    return (
       <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
       </>
    )
}

export default Tasks
