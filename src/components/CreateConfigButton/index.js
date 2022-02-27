import React from 'react';
import './CreateConfigButton.css';

const CreateConfigButton = (props) => {
    const createTodo = () => {
        props.setOpenModalConfig(!props.openModalConfig);
    }
    
    return (
    <i
        className="material-icons build ConfigButton"
        onClick={createTodo}
    >
        build
    </i>
    )
}

export {CreateConfigButton};