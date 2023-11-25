import React from 'react';
import MyButton from './MyButton';

const App = () => {
  const [name, setName] = React.useState('Adam');
  const [age, setAge] = React.useState(35);

  return (
    <div>
      <section>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name}</p>
        <MyButton text='Change Name' onClick={() => setName('John')} />
      </section>
      <section>
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
        <MyButton text='Change Age' onClick={() => setAge(40)} />
      </section>
    </div>
  );
};

export default App;
