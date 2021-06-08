import "./App.css";
import ClassPhoneInput from "./ClassPhoneInput";
import HooksPhoneInput from "./HooksPhoneInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phone Input</h1>
        <h2>Class</h2>
        <ClassPhoneInput />
        <h2>Hooks</h2>
        <HooksPhoneInput />
      </header>
    </div>
  );
}

export default App;
