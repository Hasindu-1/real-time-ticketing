
import './App.css';
import Configure from './Components/Configure';
import LogsDisplay from './Components/LogsDisplay';
import StartStop from './Components/StartStop';
import Navbar from './page-Items/Navbar';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Configure></Configure>
        <StartStop></StartStop>
        <LogsDisplay></LogsDisplay>
        
       
      </header>
    </div>
  );
}

export default App;
