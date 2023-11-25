import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    if (!this.state.newTodo) return;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: prevState.todos.length + 1, text: this.state.newTodo, completed: false }],
      newTodo: '',
    }));
  };

  handleToggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    }));
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
