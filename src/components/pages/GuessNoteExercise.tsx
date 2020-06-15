import React from 'react';
import {useParams} from 'react-router-dom';
import { songs } from '../../utils/songs';

export default function GuessNoteExercise() {
    const {id} = useParams();
    console.log(id);

    const songToPlay:string = songs[Math.floor(Math.random() * songs.length)];
    return (
        <div>
            <ul>
                <li>5 min - Scales</li>
                <li>5 min - Minimum movement</li>
                <li>5 min - Spider JustinGuitar</li>
                <li>5 min - Spider No notes</li>
                <li>5 min - Finger Gym</li>
                <li>{songToPlay}</li>
            </ul>
        </div>
    );
}
