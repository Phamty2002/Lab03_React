import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos((prevState) => [...prevState, { id: prevState.length, text: newTodo }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const newTodo = '';

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
