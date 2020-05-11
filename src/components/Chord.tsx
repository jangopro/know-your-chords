import React from 'react';

type ChordProps = {
    chord: string,
    displayImage: boolean,
    selected: boolean
}

export default function Chord(props: ChordProps) {
    console.log(props.selected + props.chord);
    
    return (
        <div>
            <h4>{props.chord}</h4>
            {
                props.displayImage ? <img src={`img/${props.chord}.gif`} alt={props.chord} /> : null
            }
        </div>
    );
}
