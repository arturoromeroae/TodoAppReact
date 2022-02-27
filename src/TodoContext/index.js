import React, { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [openModalConfig, setOpenModalConfig] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;


    let searchedTodos = [];
    let getIcons = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const addTodo = (text, completedIcon, unCompletedIcon, deleteIcon) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            completedIcon: completedIcon,
            unCompletedIcon: unCompletedIcon,
            deleteIcon: deleteIcon,
        });
        saveTodos(newTodos);
        // todos[todOIndex] = {
        //   text: todos[todOIndex].text,
        //   completed: true
        // }
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
        // todos[todOIndex] = {
        //   text: todos[todOIndex].text,
        //   completed: true
        // }
    }

    const unCompletedTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = false;
        saveTodos(newTodos);
        // todos[todOIndex] = {
        //   text: todos[todOIndex].text,
        //   completed: true
        // }
    }
    
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        // todos[todOIndex] = {
        //   text: todos[todOIndex].text,
        //   completed: true
        // }
    }
    // console.log('antes de use efferct')
    // useEffect(() => {
    //   console.log('use efferct')
    // }, [totalTodos]);
    // console.log('luego de use efferct')

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            getIcons,
            addTodo,
            completeTodo,
            unCompletedTodo,
            deleteTodo,
            openModal,
            openModalConfig,
            setOpenModal,
            setOpenModalConfig,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
