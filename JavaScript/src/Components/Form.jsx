import React, {useState} from 'react';
import { LuSend } from "react-icons/lu";
import '../Style/Form.css';
import { v4 as uuidv4 } from 'uuid';



export default function Form ({ createTask }) {

  const [input, setInput] = useState('');

  const manageInput = e =>{
    setInput(e.target.value);
  };

  const manageSubmit = e =>{
    e.preventDefault();
    const newTask ={
      id:uuidv4(),
      text:input,
      completed:false
    }
    createTask(newTask);

  };

  return (
      <form 
        className='form-container'
        onSubmit={manageSubmit}>
        <input 
          className='form-input'
          type='text'
          name='text'
          placeholder='Enter a task...'
          onChange={manageInput}
        />
        <button 
          className='form-button'>
          <LuSend 
            className='button-icon'
          />
        </button>
      </form>
  );
}