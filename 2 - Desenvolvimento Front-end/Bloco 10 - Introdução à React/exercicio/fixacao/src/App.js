import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const thingsToDo = ['Estudar', 'Praticar', 'Jogar'];

function App() {
  return (
    <div className="App">
      { thingsToDo.map((thing) => Task(thing)) }
    </div>
  );
}

export default App;
