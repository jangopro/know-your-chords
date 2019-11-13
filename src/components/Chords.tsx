import React, { Component } from "react";

export default class Chords extends Component {
  validateForm() {
    const timer = document.querySelector("#timer") as HTMLInputElement;
    const notes = document.querySelector("#notes") as HTMLInputElement;
    const showImages = document.querySelector(
      'input[name="showImagesOptions"]:checked'
    ) as HTMLInputElement;
    localStorage["timer"] = timer.value;
    localStorage["notes"] = notes.value;
    localStorage["showImages"] = showImages.value;
    return true;
  }
  render() {
    return (
      <div>
        <h2>Chords Exercise</h2>
        <form action="game-interface" onSubmit={this.validateForm} method="get">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="timer">Timer:</label>
                <input
                  className="form-control"
                  type="text"
                  name="timer"
                  id="timer"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="notes">Chords:</label>
                <select name="notes" className="form-control" id="notes">
                  <option value="normal">Normal</option>
                  <option value="7th">7th</option>
                  <option value="sus">Sus Shapes</option>
                  <option value="slash">Slash Chords</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check  form-check-inline">
              <input
                type="radio"
                name="showImagesOptions"
                className="form-check-input"
                id="showImages"
                value="true"
              />
              <label className="form-check-label" htmlFor="showImages">
                With Images
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="showImagesOptions"
                className="form-check-input"
                id="hideImages"
                value="false"
              />
              <label className="form-check-label" htmlFor="hideImages">
                No Images
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Let's Play!
          </button>
        </form>
      </div>
    );
  }
}
