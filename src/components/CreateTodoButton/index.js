import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const createTodo = () => {
    props.setOpenModal(!props.openModal);
    console.log(props.openModal);
  }

  return (
    <button 
      className="TodoButton"
      onClick={createTodo}
    >
      +
    </button>
  )
}

export { CreateTodoButton }