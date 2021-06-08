import "./App.css";
import ClassPhoneInput from "./ClassPhoneInput";
import HooksPhoneInput from "./HooksPhoneInput";
import ClassClock from "./ClassClock";
import HooksClock from "./HooksClock";
import ClassUserName from "./ClassUserName";
import HooksUserName from "./HooksUserName";
import { useState } from "react";

function App() {
  const [id, setId] = useState("1");
  const [label, setLabel] = useState("test");
  return (
    <div className="App">
      <h1>Phone Input</h1>
      <h2>Class</h2>
      <ClassPhoneInput />
      <h2>Hooks</h2>
      <HooksPhoneInput />

      <hr />

      <h1>Clock</h1>
      <h2>Class</h2>
      <ClassClock />
      <h2>Hooks</h2>
      <HooksClock />

      <hr />

      <h1>API</h1>
      <span>id</span>
      <input value={id} onChange={(event) => setId(event.target.value)} />
      <span>label</span>
      <input value={label} onChange={(event) => setLabel(event.target.value)} />
      <h2>Class</h2>
      <ClassUserName id={id} label={label} />
      <h2>Hooks</h2>
      <HooksUserName id={id} label={label} />
    </div>
  );
}

export default App;
