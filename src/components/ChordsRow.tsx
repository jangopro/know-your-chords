import React from 'react';
import Chord from './Chord';

type ChordsRowProps = {
    chords: string[],
    displayImage: boolean
    selectedIndex: number
}

export default function ChordsRow(props:ChordsRowProps) {
    const {chords, displayImage, selectedIndex} = props;
    return (
        <>
            {chords.map((chord, i) => {
                return <Chord chord={chord} selected={selectedIndex === i} key={i} displayImage={displayImage} />;
            })}
        </>
    );
}
