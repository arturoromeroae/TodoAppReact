import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import User from '../images/istockphoto-1227303423-612x612-removebg-preview.png'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm';
import { ConfigTodo } from '../components/ConfigTodo';

const AppUI = () => {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        unCompletedTodo,
        deleteTodo,
        openModal,
        openModalConfig,
        setOpenModal,
        setOpenModalConfig
    } = useContext(TodoContext)

    return (
        <>
            <div className='containerApp'>
                <img className='illustration' src={User} alt="Peson illustration" />
                <TodoCounter
                    setOpenModalConfig={setOpenModalConfig}
                    openModalConfig={openModalConfig}
                />
                <TodoSearch />
            </div>

            <>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                <TodoList>
                    {searchedTodos.map((todo) => (
                        todo.text &&
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                            unCompleted={() => unCompletedTodo(todo.text)}
                        />
                    ))}
                </TodoList>
            </>
            
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            {!!openModalConfig && (
                <Modal>
                    <ConfigTodo />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </>
    )
}

export { AppUI };