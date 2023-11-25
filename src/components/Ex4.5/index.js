import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  let [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Node.js', completed: false },
    { id: 3, text: 'Build a full-stack app', completed: false },
  ]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos((prevState) => [...prevState, { id: prevState.length + 1, text: newTodo, completed: false }]);
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

  let [newTodo, setNewTodo] = React.useState('');

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
