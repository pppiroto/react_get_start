import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Home = () => (
  <div><h2>Home</h2></div>
)
const About = () => (
  <div><h2>About</h2></div>
)
const Topics = () => (
  <div><h2>Topics</h2></div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            </ul>  
            <hr/>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;