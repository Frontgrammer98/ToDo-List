import React, { useState } from "react";
import Task from '../Components/Task';
import Form from '../Components/Form';

// Main component
const Main = () => {
  // State for managing tasks, pending count, and done count
  const [tasks, setTasks] = useState([]);
  const [pending, setPending] = useState(0);
  const [done, setDone] = useState(0);

  // Function to create a new task
  const createTask = data => {
    data.text = data.text.trim();
    if (data.text) {
      // Update tasks and counts
      const updatedTasks = [data, ...tasks];
      setTasks(updatedTasks);
      setPending(pending + 1);
    }
  };

  // Function to remove a task
  const removeTask = (id, completed) => {
    // Update counts based on completion status
    completed ? setDone(done - 1) : setPending(pending - 1);
    // Filter out the removed task
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to toggle task completion status
  const completeTask = (id, completed) => {
    // Update counts based on completion status
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(updatedTasks);
    setDone(completed ? done - 1 : done + 1);
    setPending(completed ? pending + 1 : pending - 1);
  };

  // TaskComponent to render individual tasks
  const TaskComponent = ({ id, text, completed }) => (
    <Task
      key={id}
      id={id}
      text={text}
      completed={completed}
      removeTask={removeTask}
      completeTask={completeTask}
    />
  );

  // Render the main component
  return (
    <>
      {/* Form for creating new tasks */}
      <Form createTask={createTask} />

      {/* Display pending and completed task counts */}
      <div className='subtitles-container'>
        <h2>Pending: {pending}</h2>
        <h2 className='completed-subtitle'>Completed: {done}</h2>
      </div>

      {/* Container for both pending and completed tasks */}
      <div className='tasks-container'>
        {/* Container for pending tasks */}
        <div className='pending-tasks-container'>
          {tasks.map(task => (
            task.completed === false && <TaskComponent {...task} />
          ))}
        </div>

        {/* Container for completed tasks */}
        <div className='completed-tasks-container'>
          {tasks.map(task => (
            task.completed === true && <TaskComponent {...task} />
          ))}
        </div>
      </div>
    </>
  );
};

// Export the Main component as the default export
export default Main;
