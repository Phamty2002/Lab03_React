import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [items, setItems] = React.useState([]);

  const addItem = (text) => {
    setItems((prevState) => [...prevState, { id: prevState.length, text }]);
  };

  const removeItem = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input type="text" placeholder="Enter item text" />
      <button onClick={() => addItem('New Item')}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
