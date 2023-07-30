'use client';

import React, { useState } from 'react';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const getSomething = () => {
    axios.get('http://localhost:5001/api/v1/tasks').then(response => {
      const tasksArray = JSON.parse(response.data.tasks);
      setTasks(tasksArray);
    });
  };

  const subTitle = 'Zenn is good service!!';

  return (
    <>
      <div className='container'>
        <div>
          <h1 className="title">Zenn-app</h1>
          <h2 className="subtitle">{subTitle}</h2>
          <button onClick={getSomething} className='py-3 px-6 bg-blue-400 text-white rounded-md'>タスク取得</button>
          <ul className='list-disc'>
            {tasks.map(task => (
              <li key={task.id} className='text-left'>{task.title}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
