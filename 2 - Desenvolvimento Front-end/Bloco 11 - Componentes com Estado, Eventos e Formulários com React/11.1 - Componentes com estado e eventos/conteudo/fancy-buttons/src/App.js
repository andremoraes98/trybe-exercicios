import './App.css';

const handleClickLeft = () => {
  console.log('Clicou na esquerda!');
}

const handleClickMid = () => {
  console.log('Clicou no meio!');
}

const handleClickRigth = () => {
  console.log('Clicou na direita!');
}

function App() {
  return (
    <div className="App">
      <button onClick={ handleClickLeft }>Esquerda</button>
      <button onClick={ handleClickMid }>Meio</button>
      <button onClick={ handleClickRigth }>Direita</button>
    </div>
  );
}

export default App;
