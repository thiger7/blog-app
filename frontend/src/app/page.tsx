'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [allTasks, setAllTasks] = useState([]);
  const getSomething = () => {
    axios.get('http://localhost:5000/api/v1/tasks').then(response => {
      setAllTasks(response.data);
    });
  };

  const subTitle = 'Zenn is good service!!';

  return (
    <div className="container">
      <div>
        <h1 className="title">Zenn-app</h1>
        <h2 className="subtitle">{subTitle}</h2>
        <button onClick={getSomething}>タスク取得</button>
      </div>
      {allTasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
