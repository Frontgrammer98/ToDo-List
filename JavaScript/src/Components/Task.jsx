import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import '../Style/Task.css';


export default function Task ({ id, text,completed,removeTask,completeTask }){
  return(
    <>
      <div className= {completed ? 'task-container completed' : 'task-container'}>
        <div 
          className='task-text-container'
          onClick={()=>completeTask(id,completed)}>
          {text}
        </div>
        <div 
          className='task-icon-container'
          onClick={()=>removeTask(id,completed)}>
          <TiDeleteOutline 
          className='task-icon'
          />
        </div>
      </div>


    </>
  );
}