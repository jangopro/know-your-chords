import React, { Component } from "react";

export default class Rhythm extends Component {
  rhythmExerciseValidation() {
    const rhythm = document.querySelector(
      "#rhythm-selector"
    ) as HTMLInputElement;
    localStorage["rhythm"] = rhythm.value;
    return true;
  }
  render() {
    return (
      <div>
        <form
          action="rhythm-exercise"
          onSubmit={this.rhythmExerciseValidation}
          method="get"
        >
          <select id="rhythm-selector">
            <option value="rust-4">Rust 4</option>
            <option value="rust-8">Rust 8</option>
            <option value="rust-9">Rust 9</option>
            <option value="shuffle">Shuffle</option>
            <option value="triplets">Triplets</option>
          </select>
          <button type="submit">Rhythm Exercise</button>
        </form>
      </div>
    );
  }
}
