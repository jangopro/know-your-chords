import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GameInterface extends Component {
  yolo!: NodeJS.Timer;
  componentDidMount() {
    const chords = ["A", "Em", "C", "G", "D", "Am", "E", "F"];
    const chords7th = ["A7", "B7", "C7", "G7", "D7", "E7", "Fmaj7"];
    const { notes, showImages } = localStorage;
    const timer = Number(localStorage["timer"]) || 4;

    let chordPlaying: string;

    let timerCounter = timer;
    document.querySelector("#timer")!.innerHTML = String(timerCounter);

    if (showImages === "true") {
      const imgTags = document.querySelectorAll(".img");
      imgTags.forEach(function(imgTag) {
        imgTag.classList.remove("d-none");
      });
    }

    if (notes === "normal") {
      init(chords);
    } else if (notes === "7th") {
      init(chords7th);
    } else if (notes == "both") {
      const arrayCombined = chords.concat(chords7th);
      init(arrayCombined);
    }

    function init(chordsToPlay: Array<string>) {
      chordPlaying = getRandomChord(chordsToPlay);
      showChords(chordsToPlay);
      setInterval(function() {
        showChords(chordsToPlay);
      }, timer * 1000);
    }

    //Rechercher un nouvel accord
    function getRandomChord(arrayChords: Array<string>): string {
      let chordChosen =
        arrayChords[Math.floor(Math.random() * arrayChords.length)];
      if (chordPlaying === chordChosen) {
        return getRandomChord(arrayChords);
      }
      return chordChosen;
    }

    function showChords(chords: Array<string>) {
      let nextChordToBePlayed = getRandomChord(chords);
      showChord(".chord", chordPlaying);
      showChord(".next-chord", nextChordToBePlayed);
      chordPlaying = nextChordToBePlayed;
    }

    function showChord(selector: string, chord: string) {
      document.querySelector(selector)!.innerHTML = chord;
      if (showImages === "true") {
        document
          .querySelector(`${selector}-img`)!
          .setAttribute("src", `img/${chord}.gif`);
      }
    }

    //Change d'accord aux 4 secondes
    this.yolo = setInterval(function() {
      timerCounter--;
      document.querySelector("#timer")!.innerHTML = String(timerCounter);
      if (timerCounter === 1) {
        timerCounter = timer + 1;
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.yolo);
  }
  render() {
    return (
      <div>
        {" "}
        <h2 id="timer" className="text-center"></h2>
        <div className="row">
          <div className="col-md">
            <h3>Current chord</h3>
            <h4 className="chord">A</h4>

            <img
              src="img/a.gif"
              className="chord-img img d-none"
              alt="image chord"
            />
          </div>
          <div className="col-md">
            <h3>Next chord to play</h3>
            <h4 className="next-chord">A</h4>

            <img
              src="img/a.gif"
              className="next-chord-img img d-none"
              alt="image chord"
            />
          </div>
        </div>
        <Link to="/" className="btn btn-danger">
          Finished!
        </Link>
      </div>
    );
  }
}
