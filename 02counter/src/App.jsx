import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    counter < 20 ? setCounter(counter + 1) : 20;
  };

  const removeValue = () => {
    counter > 0 ? setCounter(counter - 1) : 0;
  };
  return (
    <>
      <h1>Lets start with useState</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
