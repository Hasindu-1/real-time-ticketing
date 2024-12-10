
import './App.css';
import Configure from './Components/Configure';
import StartStop from './Components/StartStop';
import Navbar from './page-Items/Navbar';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Configure></Configure>
        <StartStop></StartStop>
        
       
      </header>
    </div>
  );
}

export default App;
