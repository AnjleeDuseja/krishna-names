
import './App.css';
import names from "./krishnaNames.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Name: {names[0].name}
        </p>
        <p>
        Meaning :  {names[0].meaning}
        </p>
        
      </header>
    </div>
  );
}

export default App;
