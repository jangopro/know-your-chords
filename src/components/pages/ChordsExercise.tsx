import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChordsRow from '../ChordsRow';
// TODO: Use React functionality

export default function ChordsExercise() {
    const chords = ['A', 'Em', 'C', 'G', 'D', 'Am', 'E', 'F', 'Dm'];
    const chords7th = ['A7', 'B7', 'C7', 'G7', 'D7', 'E7', 'Fmaj7'];
    const susShapes = ['Asus2', 'Asus4', 'Dsus2', 'Dsus4', 'Esus4'];
    const slashChords = ['d-F', 'g-b', 'c-g'];
    const chordsToBePlayed: string[] = [];
    const notes = localStorage['notes'].split(',');
    const { showImages } = localStorage;
    const timer = Number(localStorage['timer']) || 4;
    const [chordSelectedIndex, setChordSelectedIndex] = useState(0);

    // TODO: Redo this
    notes.forEach((note: string) => {
        switch (note) {
        case 'basic':
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
    const [currentChordsRow, setCurrentChordsRow] = useState(buildChordsRow);
    const [nextChordsRow, setNextChordsRow] = useState(buildChordsRow);

    function buildChordsRow():string[] {
        const array = [];
        for (let index = 0; index < 4; index++) {
            array[index] = chordsToBePlayed[Math.floor(Math.random() * chordsToBePlayed.length)];
        }

        return array;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentChordsRow(nextChordsRow);
            setNextChordsRow(buildChordsRow);
        }, 1000 * timer);

        return () => {clearInterval(interval);};
    }, [currentChordsRow, nextChordsRow]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(chordSelectedIndex);
            if(chordSelectedIndex < 3) {
                setChordSelectedIndex(chordSelectedIndex + 1);
            } else {
                setChordSelectedIndex(1);
            }
        }, 1000);

        return () => {clearInterval(interval);};
    }, [chordSelectedIndex]);

    return (
        <div>
            <div className='chords-row'>
                <ChordsRow chords={currentChordsRow} selectedIndex={chordSelectedIndex} displayImage={showImages}  />
            </div>
            <h3>Next Row</h3>
            <div className='chords-row'>
                <ChordsRow chords={nextChordsRow} selectedIndex={chordSelectedIndex} displayImage={showImages}  />
            </div>
            <Link to="/">
                <button type="button">
                    Finished
                </button>
            </Link>
        </div>
    );
}
