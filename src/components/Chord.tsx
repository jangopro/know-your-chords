import React from 'react';

type ChordProps = {
    chord: string,
    displayImage: boolean,
    selected: boolean
}

export default function Chord(props: ChordProps) {
    let classSelected:string = '';
    if(props.selected) {
        classSelected = 'selected-chord';
    }
    
    return (
        <div>
            <h4>{props.chord}</h4>
            {
                props.displayImage ? <img src={`img/${props.chord}.gif`} alt={props.chord} className={classSelected} /> : null
            }
        </div>
    );
}
