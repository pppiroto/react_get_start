import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { helloAction } from '../actions';

class Home extends Component {
  handleMessage() {
    this.props.dispatch(helloAction('Yes'));
  }
  render () {
    return (
      <div>
        <h2>Home</h2>
        { this.props.hello }
        <br />
        <button onClick={ this.handleMessage.bind(this) } >Hello</button>
      </div>
    );
  }
}
 
const About = () => (
  <div><h2>About</h2></div>
)
const Topics = () => (
  <div><h2>Topics</h2></div>
)

class App extends Component {
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
          {/* http://qiita.com/kuy/items/869aeb7b403ea7a8fd8a */}
          <Route exact path="/" component={connect(state => state)(Home)} />
          <Route exact path="/about" component={About} />
          <Route exact path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    );
  }
}

// http://qiita.com/MegaBlackLabel/items/df868e734d199071b883#_reference-863a1e1485bf47f046e5
function mapStateToProps(state) {
  return {
    message:state.hello
  };
}

// https://stackoverflow.com/questions/43350683/react-router-uncaught-typeerror-cannot-read-property-route-of-undefined
// export default withRouter(connect(mapStateToProps)(App))
export default connect(state => state)(App)
