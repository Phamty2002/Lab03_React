import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
