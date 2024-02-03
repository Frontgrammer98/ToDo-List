import React from 'react';
import '../styles/Form.css';
import { GrAddCircle } from "react-icons/gr";


//inicializa el componentefucional From

const Form = () => {
  return (
    <>
      <form className='form-container'>
        <input 
          type='text'
          placeholder='Ingrese una tarea'
          className='form-input'
        />
        <button 
          type='submit'
          className='form-button'
        >
         <GrAddCircle  className='form-button-icon'/> 
        </button>
      </form>
    </>
  );
};

export default Form;

