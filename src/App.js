// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Instructors from './components/Instructors/Instructors';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Router exact path="/">
            <Home></Home>
          </Router>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
