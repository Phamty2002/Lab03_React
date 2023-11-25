import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return;
    }

    const formData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    console.log('Form submitted:', formData);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <br />
      <label>Message:</label>
      <textarea
        name="message"
        value={message}
        onChange={handleInputChange}
        required
        rows={5}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
