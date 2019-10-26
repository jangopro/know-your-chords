import React, { Component } from "react";
import Rhythm from "./Rhythm";
import Chords from "./Chords";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Get Ready!</h2>
        <Chords></Chords>
        <Rhythm></Rhythm>
      </div>
    );
  }
}
