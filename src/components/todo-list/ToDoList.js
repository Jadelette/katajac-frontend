import React, {useEffect, useState} from 'react';
import './ToDoList.scss';
import storedTasks from '../../data/tasks.json';
import TaskList from "./TaskList/TaskList";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(storedTasks)
  }, [])

  const handleAddTasks = () => {
    setTasks((prev) => ([...prev, ("task " + (tasks.length+1))]));
  }

  return (
    <>
      <div>
        <h1>Weekly Task Planner</h1>
        <p>Manage your personal weekly task list and keep track of your progress.</p>
      </div>
      <div>
        <form>
          <h3>Task list</h3>
          <TaskList tasks={tasks}/>
          <button onClick={handleAddTasks} type="button">add +</button>
        </form>
      </div>
    </>
  )
}