import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Clock } from "./components/Clock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true,
      mountStatus: "(Un)Mount Home Component"
    };
  }

  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted,
      mountStatus: "Mount Home Component"
    });
  }

  render() {
    let homeCmp = "";
    if (this.state.homeMounted) {
      this.setState({
        mountStatus: "(Un)Mount Home Component"
      });
      homeCmp = (
        <Home
          name={"Egin"}
          initialAge={20}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {homeCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button
              onClick={this.onChangeHomeMounted.bind(this)}
              className="btn btn-primary"
            >
              {this.state.mountStatus}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}

//render(<App />, document.getElementById("app"));
