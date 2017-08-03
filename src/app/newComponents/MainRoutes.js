import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

export class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainRoutes}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}

export class MainRoutes extends React.Component{
    render(){
        return(
          <div>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
              {this.props.children}
          </div>
        );
    }
}

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home...</h1>
            </div>
        );
    }
}

class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About...</h1>
            </div>
        );
    }
}

class Contact extends React.Component{
    render(){
        return(
            <div>
                <h1>Contact...</h1>
            </div>
        );
    }
}