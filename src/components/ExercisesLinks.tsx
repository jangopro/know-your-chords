import React from 'react';
import { Link } from 'react-router-dom';

function ExercisesLinks() {
    return (
        <>
            <Link to="/exercise/spider">Spider</Link>
            <Link to="/exercise/finger-gym">Finger Gym</Link>
            <Link to="/exercise/minimum-movement">Minimum movement</Link>
            <Link to="/exercise/guess">Guess the note</Link>
        </>
    );
}

export default ExercisesLinks;
