import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Navbar from "./components/Navbar";
import NewBook from "./components/NewBook";

function App() {
  return (
    <div className="container">
      <div>
        <Router>
          <Navbar />
          <Route path="/" />
          <Route path="/allBooks" component={ListBooks} />
          <Route path="/newBook" component={NewBook} />
        </Router>
      </div>
    </div>
  );
  // <Route path="/book/:id"/>
}

export default App;
