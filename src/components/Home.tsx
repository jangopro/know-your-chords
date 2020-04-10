import React from 'react';
import Rhythm from './Rhythm';
import Chords from './Chords';
import ExercisesLinks from './ExercisesLinks';

export default function Home() {
    return (
        <div>
            <Chords></Chords>
            <Rhythm></Rhythm>
            <h2>Exercises</h2>
            <ExercisesLinks></ExercisesLinks>
        </div>
    );
}
