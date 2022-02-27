import React from 'react';
import { TodoProvider } from '../TodoContext';
import './App.css';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text: 'Lorem Ipsum is simply dummy text and typesetting industry.', completed: true},
//   {text: 'Lorem Ipsum is simply dum and typesetting industry.', completed: false},
//   {text: 'Lorem Ipsum is simply dummy text of the print typesetting industry.', completed: false},
//   {text: 'Ipsum is text of the printing and typesetting industry.', completed: true}
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
