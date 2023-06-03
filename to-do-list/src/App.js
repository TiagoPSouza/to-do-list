import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState ([
    {
      Id: 1,
      text: "criar funcionalidade x no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      Id: 2,
      text: "ir a academia",
      category: "pessoal",
      isCompleted: false,
    },
    {
      Id: 3,
      text: "estudar react",
      category: "estudos",
      isCompleted: false,
    }
  ])

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
