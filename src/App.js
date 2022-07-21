import {useState} from 'react';
import './App.css';

function App() {


  const [linea1, setLinea1] =  useState('holi');
  const [linea2, setLinea2] =  useState('holi');

  const onChangeLinea1 = function(evento){
    alert(evento.target.value)
  }

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
      <input onChange={onChangeLinea1} type="text" placeholder='mensaje'/> <br />
      <input type="text" placeholder='mensaje 2'/> <br />
      <button>Exportart</button>

      <div>
        <span>{linea1}</span>
        <span>{linea2}</span>
      </div>

    </div>
  );
}

export default App;
