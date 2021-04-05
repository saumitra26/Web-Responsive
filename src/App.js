
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    
        <Navbar/>
        <Route path='/' exact/>
    </Router>
  );
}

export default App;
