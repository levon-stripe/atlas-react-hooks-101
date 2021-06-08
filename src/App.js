import "./App.css";
import ClassPhoneInput from "./ClassPhoneInput";
import HooksPhoneInput from "./HooksPhoneInput";
import ClassClock from "./ClassClock";
import HooksClock from "./HooksClock";

function App() {
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
    </div>
  );
}

export default App;
