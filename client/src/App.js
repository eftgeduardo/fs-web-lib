import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Books from "./components/Books";
import Home from "./components/Home";
import ListBooks from "./components/ListBooks";
import Navbar from "./components/Navbar";
import NewBook from "./components/NewBook";
import EditBook from "./components/EditBook";

function App() {
  return (
    <div className="container">
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/allBooks" component={ListBooks} />
          <Route path="/newBook" component={NewBook} />
          <Route path="/book/:id" component={Books} />
          <Route path="/edit/:id" component={EditBook} />
        </Router>
      </div>
    </div>
  );
  // <Route path="/book/:id"/>
}

export default App;
