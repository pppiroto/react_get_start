import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { helloAction } from '../actions';

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
  handleMessage() {
    this.props.dispatch(helloAction());
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr />
          <input type="text" value={ this.props.message } />
          <button onClick={ this.handleMessage.bind(this) } >Hello</button>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    message: state.hello
  };
}

// https://stackoverflow.com/questions/43350683/react-router-uncaught-typeerror-cannot-read-property-route-of-undefined
//export default withRouter(connect(mapStateToProps)(App))
export default connect(mapStateToProps)(App)
