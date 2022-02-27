import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext';
import './TodoForm.css'

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <span 
                        className='CloseModal'
                        onClick={onCancel}
                    >
                        x
                    </span>
                    <h1 className='TitleForm'>Agregar Todo</h1>
                    <label>Escribe el todo</label>
                    <textarea
                        value={newTodoValue}
                        onChange={onChange}
                        placeholder='Introduce el texto del Todo 📝'
                    />
                    <div>
                        <button
                            className='cancelTodo'
                            type='button'
                            onClick={onCancel}
                        >
                            <i className="material-icons cancel">not_interested</i>
                            Cancelar
                        </button>
                        <button
                            className='addTodo'
                            type='submit'
                        >
                            <i className="material-icons add">add</i>
                            Añadir Todo
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export { TodoForm };
