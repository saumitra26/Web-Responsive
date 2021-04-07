
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
    
        <Navbar/>
        <Route path='/' exact component={Home}/>
        <Route path='/products'  component={Products}/>
        <Route path='/services' component={Services}/>
        <Route path='/Sign-up'  component={SignUp}/>
    </Router>
  );
}

export default App;
