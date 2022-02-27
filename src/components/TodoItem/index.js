import React from 'react';
import CompleteIcon from '../TodoIcon/CompleteIcon';
import './TodoItem.css'

function TodoItem(props) {

  return (
    <li className='TodoItem'>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          <i className="material-icons icons">delete</i>
        </span>

        <span 
          className={`Icon Icon-uncheck ${!props.completed && 'Icon-check--deactivated'}`}
          onClick={props.unCompleted}
        >
          <i className="material-icons icons">mood_bad</i>
        </span>

        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
          <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
          />
        </span>
        
        <p 
          className={
            `TodoItem-p ${props.completed && 'TodoItem-p--complete'}`
          }
        >
          {props.text}
        </p>
    </li>
  )
}

export { TodoItem }