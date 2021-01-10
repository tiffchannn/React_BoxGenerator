import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {

  const [colors, setColors] = useState([]); // add each newly created box into array using map?

  // create a function to be able to pass color text from form into box component
  const addColor = ( color ) => {
    setColors([...colors, color])
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <div className="form">
        <Form addColor={ addColor }/>
      </div>
      {colors.map(color =>
        <Box color={color} />
      )}
    </div>
  );
}

export default App;
