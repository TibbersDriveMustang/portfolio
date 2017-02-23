import React from "react";
import "../stylesheets/main.scss";
import {Navigation} from '../nav'
// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      //Render Navigation somewhere...........
      <div className="container">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
