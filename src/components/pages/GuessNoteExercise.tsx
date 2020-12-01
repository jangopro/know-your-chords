import React from 'react';
import { songs } from '../../utils/songs';

export default function GuessNoteExercise() {

    const songToPlay:string = songs[Math.floor(Math.random() * songs.length)];
    return (
        <div>
            <ul>
                <li>5 min - C Major Scale</li>
                <li>5 min - Minimum movement</li>
                <li>5 min - Spider JustinGuitar</li>
                <li>5 min - Spider No notes</li>
                <li>5 min - Finger Gym</li>
                <li>5 min - Change Chords</li>
                <li>{songToPlay}</li>
            </ul>
            <hr/>
            <h2>
            Practice songs
            </h2>
            <ul>
                <li>Sweet Child o&apos; Mine</li>
                <li>Snow (Hey oh)</li>
                <li>Limelight</li>
            </ul>
        </div>
    );
}
