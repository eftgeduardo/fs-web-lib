
import {BrowserRouter as Router,Route  } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
            <Navbar/>
            <Route path="/"/>
            <Route path="/allBooks" component={Books}/>
          </Router>
    </>
      
  );
}

export default App;
