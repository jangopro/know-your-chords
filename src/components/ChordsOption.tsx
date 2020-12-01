type ChordsOptionProps = {
    chordCategory: string,
    chordName: string
}

export default function ChordsOption(props: ChordsOptionProps) {
    return (
        <div>
            <input
                type="checkbox"
                id={props.chordCategory}
                value={props.chordCategory}
                name="notes"
            />
            <label htmlFor={props.chordCategory}>
                {props.chordName}
            </label>
        </div>
    );
}
