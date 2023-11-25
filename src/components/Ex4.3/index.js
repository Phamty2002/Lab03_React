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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'active') {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });

  return (
    <div>
      <h1>Todo List</h1>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {filteredTodos.map((todo) => (
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
