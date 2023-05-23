import { useState } from "react";
import "./App.css";
import { Form1 } from "../forms/form1";
import { Form2 } from "../forms/form2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form1></Form1>
      <Form2></Form2>
    </>
  );
}

export default App;
