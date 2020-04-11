import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chord from '../Chord';
// TODO: Rename GameInterface
// TODO: Use React functionality
// TODO Recursion problem

export default function GameInterface() {
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
            chordsToBePlayed.concat(...chords);
            break;
        }
    });

    useEffect(() => {
        init(chordsToBePlayed);
    }, []);

    function init(chordsToPlay: Array<string>) {
        chordPlaying = getRandomChord(chordsToPlay);
        showChords(chordsToPlay);
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
        chordPlaying = nextChordToBePlayed;
    }

    return (
        <div>
            <h2 id="timer">
                {timer}
            </h2>
            <div className='chords-row'>
                <Chord chord={'dm'} displayImage={showImages} />
                <Chord chord={'em'} displayImage={showImages} />
                <Chord chord={'d'} displayImage={showImages} />
                <Chord chord={'f'} displayImage={showImages} />
            </div>
            <Link to="/">
                <button type="button">
                    Finished
                </button>
            </Link>
        </div>
    );
}
