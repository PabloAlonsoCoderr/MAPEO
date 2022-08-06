import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sistema1 from "./Sistema1";
import Sistema2 from "./Sistema2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sistema1 />
      <Sistema2 />
    </div>
  );
}

export default App;
