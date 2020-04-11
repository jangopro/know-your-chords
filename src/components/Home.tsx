import React from 'react';
import Rhythm from './RhythmExerciseSelection';
import Chords from './ChordsExerciseSelection';
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
