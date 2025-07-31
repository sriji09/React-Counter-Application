import './App.css';
import CounterClass from './Component/CounterClass';
import CounterFuction from './Component/CounterFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment-2 Counter Application</h1>
        <div className="flex-container">
          <CounterFuction className="flex-item"/>
          <CounterClass className="flex-item"/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
