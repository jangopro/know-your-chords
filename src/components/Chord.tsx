import React from 'react';

type ChordProps = {
    chord: string,
    displayImage: boolean
}

export default function Chord(props: ChordProps) {
    return (
        <div>
            <h4>{props.chord}</h4>
            {
                props.displayImage ? <img src={`img/${props.chord}.gif`} alt={props.chord} /> : null
            }
        </div>
    );
}
