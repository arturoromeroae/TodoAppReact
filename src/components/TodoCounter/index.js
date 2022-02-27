import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoCounter.css'
import { CreateConfigButton } from '../CreateConfigButton'

const TodoCounter = (props) => {
  const { totalTodos, completedTodos } = useContext(TodoContext)

  return (
    <>
      <CreateConfigButton 
        setOpenModalConfig={props.setOpenModalConfig}
        openModalConfig={props.openModalConfig}
      />
      <h1 className='TodoTitle'>Mis Todo's</h1>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Todo's</h2>
    </>
  )
}

export { TodoCounter }