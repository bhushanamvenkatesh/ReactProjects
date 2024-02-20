import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter icount={20} isserialInc={true} ></Counter>
      <Counter icount={5} isserialInc={false}></Counter>
    </div>
  );
}

export default App;
