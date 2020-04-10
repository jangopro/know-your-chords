import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// TODO: Rename GameInterface

export default function GameInterface() {
    let yolo!: NodeJS.Timer;
    let yolo2!: NodeJS.Timer;
    //const that = this;
    const chords = ['A', 'Em', 'C', 'G', 'D', 'Am', 'E', 'F', 'Dm'];
    const chords7th = ['A7', 'B7', 'C7', 'G7', 'D7', 'E7', 'Fmaj7'];
    const susShapes = ['Asus2', 'Asus4', 'Dsus2', 'Dsus4', 'Esus4'];
    const slashChords = ['d-F', 'g-b', 'c-g'];
    const chordsToBePlayed: string[] = [];
    const notes = localStorage['notes'].split(',');
    const { showImages } = localStorage;
    const timer = Number(localStorage['timer']) || 4;
    let chordPlaying: string;
    notes.forEach((note: string) => {
        switch (note) {
            case 'normal':
                chordsToBePlayed.push(...chords);
                break;
            case '7th':
                chordsToBePlayed.push(...chords7th);
                break;
            case 'sus':
                chordsToBePlayed.push(...susShapes);
                break;
            case 'slash':
                chordsToBePlayed.push(...slashChords);
                break;
            case 'all':
                chordsToBePlayed.push(...chords, ...chords7th, ...susShapes, ...slashChords);
                break;
            default:
                chordsToBePlayed.concat(chords);
                break;
        }
    });

    useEffect(() => {
        init(chordsToBePlayed);

        let timerCounter = timer;
        document.querySelector('#timer')!.innerHTML = String(timerCounter);

        if (showImages === 'true') {
            const imgTags = document.querySelectorAll('.img');
            imgTags.forEach(function (imgTag) {
                imgTag.classList.remove('d-none');
            });
        }

        //Change d'accord aux 4 secondes
        yolo = setInterval(function () {
            timerCounter--;
            document.querySelector('#timer')!.innerHTML = String(timerCounter);
            if (timerCounter === 1) {
                timerCounter = timer + 1;
            }
        }, 1000);

        return () => {
            clearInterval(yolo);
            clearInterval(yolo2);
        };
    }, []);

    function init(chordsToPlay: Array<string>) {
        chordPlaying = getRandomChord(chordsToPlay);
        showChords(chordsToPlay);
        yolo2 = setInterval(function () {
            showChords(chordsToPlay);
        }, timer * 1000);
    }

    //Rechercher un nouvel accord
    function getRandomChord(arrayChords: Array<string>): string {
        let chordChosen = arrayChords[Math.floor(Math.random() * arrayChords.length)];
        if (chordPlaying === chordChosen) {
            return getRandomChord(arrayChords);
        }
        return chordChosen;
    }

    function showChords(chords: Array<string>) {
        let nextChordToBePlayed = getRandomChord(chords);
        showChord('.chord', chordPlaying);
        showChord('.next-chord', nextChordToBePlayed);
        chordPlaying = nextChordToBePlayed;
    }

    function showChord(selector: string, chord: string) {
        document.querySelector(selector)!.innerHTML = chord;
        if (showImages === 'true') {
            document.querySelector(`${selector}-img`)!.setAttribute('src', `img/${chord}.gif`);
        }
    }

    return (
        <div>
            {' '}
            <h2 id="timer" className="text-center">
                4
            </h2>
            <div>
                <div>
                    <h3>Current chord</h3>
                    <h4 className="chord">A</h4>

                    <img src="img/a.gif" className="chord-img img" alt="chord" />
                </div>
                <div className="col-md">
                    <h3>Next chord to play</h3>
                    <h4 className="next-chord">A</h4>

                    <img src="img/a.gif" className="next-chord-img img" alt="chord" />
                </div>
            </div>
            <Link to="/">Finished!</Link>
        </div>
    );
}
