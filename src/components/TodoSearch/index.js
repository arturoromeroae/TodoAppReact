import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const filterTodo = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="Container">
      <input 
        className="TodoSearch" 
        placeholder="Buscar Todo's"
        value={searchValue}
        onChange={filterTodo}  
      />
    </div>
  )
}

export { TodoSearch }