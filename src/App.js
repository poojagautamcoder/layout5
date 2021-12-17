import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className = "Section-sector">
     <Home/>
    </div>
    
    </div>
  );
}

export default App;
