import { useEffect, useState } from 'react';

export default function RhythmExercise() {
    const [minutes,
        setMinutes] = useState<string | number>(0);
    const [seconds,
        setSeconds] = useState<string | number>(0);
    let minutesTest = null;
    let secondsTest = null;
    let timer: number = 60 * 5;
    const duration = timer;

    useEffect(() => {
        startTimer();
        document
            .querySelector('#rhythm-img')!
            .setAttribute('src', `img/${localStorage['rhythm']}.gif`);
    }, []);

    function startTimer() {
        setInterval(() => {
            minutesTest = parseInt(String(timer / 60), 10);
            secondsTest = parseInt(String(timer % 60), 10);
            minutesTest = minutesTest < 10 ? '0' + minutesTest : minutesTest;
            secondsTest = secondsTest < 10 ? '0' + secondsTest : secondsTest;
            setMinutes(minutesTest);
            setSeconds(secondsTest);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    return (
        <div>
            <div>
                <img id="rhythm-img" src="../../img/rust-4.gif" />
            </div>

            <strong id="timer">{minutes + ':' + seconds}</strong>
            <div>
                <a href="/">Retour</a>
            </div>
        </div>
    );
}
