import './App.css';

function App() {
  return (
    <div className="App">
      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />
      <input type="text" placeholder='mensaje'/> <br />
      <input type="text" placeholder='mensaje 2'/> <br />
      <button>Exportart</button>

      <div>
        <span>Linea 1</span>
        <span>Linea 2</span>
      </div>

    </div>
  );
}

export default App;
