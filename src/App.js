
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
    
        <Navbar/>
        <Route path='/' exact component={Home}/>
    </Router>
  );
}

export default App;
