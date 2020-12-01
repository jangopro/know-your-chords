import ChordsOption from './ChordsOption';
import {NewComponent} from './NewComponent';

export default function Chords() {
    function woahMinute(chordsChecked: NodeListOf<HTMLInputElement>, chordsToBePlayed: string[]) {
        Array.from(chordsChecked).forEach((chordChecked) => {
            chordsToBePlayed.push(chordChecked.value);
        });
    }

    function validateForm() {
        const timer = document.querySelector('#timer') as HTMLInputElement;
        const chordsChecked = document.querySelectorAll(
            'input[name="notes"]:checked'
        ) as NodeListOf<HTMLInputElement>;
        const chordsToBePlayed: string[] = [];
        woahMinute(chordsChecked, chordsToBePlayed);
        const showImages = document.querySelector(
            'input[name="showImagesOptions"]:checked'
        ) as HTMLInputElement;
        localStorage['timer'] = timer.value;
        localStorage['notes'] = chordsToBePlayed;
        localStorage['showImages'] = (showImages && showImages.value) || 'true';
        return true;
    }
    return (
        <div>
            <h2>Chords Exercise</h2>
            <form action="game-interface" onSubmit={validateForm} method="get">
                <div>
                    <div>
                        <div>
                            <label htmlFor="timer">Timer:</label>
                            <input type="number" name="timer" id="timer" min={1} max={8} defaultValue={4}/>
                        </div>
                    </div>
                    <div>
                        <h3>Chords:</h3>
                        <div className='chords-options'>
                            <ChordsOption chordCategory={'basic'} chordName={'Normal'}/>
                            <ChordsOption chordCategory={'7th'} chordName={'7th'}/>
                            <ChordsOption chordCategory={'sus'} chordName={'Sus Shapes'}/>
                            <ChordsOption chordCategory={'slash'} chordName={'Slash Chords'}/>
                            <ChordsOption chordCategory={'all'} chordName={'All'}/>
                        </div>
                    </div>
                </div>
                <div>
                    <NewComponent/>
                    <div>
                        <input
                            type="radio"
                            name="showImagesOptions"
                            id="hideImages"
                            value="false"
                        />
                        <label htmlFor="hideImages">No Images</label>
                    </div>
                </div>
                <button className="btn" type="submit">
                    Let&apos;s Play!
                </button>
            </form>
        </div>
    );
}
