import React from 'react'
import './TodosLoading.css'

const TodosLoading = ({error}) => {
  let width = window.screen.width;
  let rows = [];
  // note: we are adding a key prop here to allow react to uniquely identify each
  // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  if (width > 1000) {
    for (let i = 0; i < 2; i++) {
      rows.push(<div className='LoadingTodo-container'>
                  <span className="LoadingTodo-deleteIcon">
                    <i className="material-icons icons">delete</i>
                  </span>
                  <span 
                    className='LoadingTodo-completeIcon'>
                    <i className="material-icons icons">mood</i>
                  </span>
                  <p className='LoadingTodo-text'>
                    cargando..
                  </p>
                  <p className='LoadingTodo-text2'>
                    cargando..
                  </p>
                  <p className='LoadingTodo-text'>
                    cargando..
                  </p>
              </div>
      );
    }
  }else{
    for (let i = 0; i < 3; i++) {
      rows.push(<div className='LoadingTodo-container'>
              <span className="LoadingTodo-deleteIcon">
                <i className="material-icons icons">delete</i>
              </span>
              <span 
                className='LoadingTodo-completeIcon'>
                <i className="material-icons icons">mood</i>
              </span>
              <p className='LoadingTodo-text'>
                cargando..
              </p>
              <p className='LoadingTodo-text2'>
                cargando..
              </p>
              <p className='LoadingTodo-text'>
                cargando..
              </p>
          </div>
      );
    }
  }

  return (
    <div className='container'>
      {rows}
    </div>
  )
}

export { TodosLoading }