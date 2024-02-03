import React from 'react';
import '../styles/Task.css';
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";




//inicializa el componente funcional Task
const Task = () => {
  return (
    <>
      <div className='task-container'>
        <div className='task-text'>
          Hola mundo
        </div>

        <button className='task-button '>
          <FaPenToSquare className='task-edit'/> 
        </button>

        <button className='task-button'>
          <MdDeleteForever className='task-delete' />
        </button>
      </div>
    </>
  );
};

export default Task;