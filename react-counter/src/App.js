import './App.css';
import CounterClass from './Component/CounterClass';
import CounterFuction from './Component/CounterFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment-2 Counter Application</h1>
        <CounterFuction />
        <CounterClass />
      </header>
    </div>
  );
}

export default App;
