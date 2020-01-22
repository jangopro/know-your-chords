import React, { Component, useEffect } from 'react';

export default function RhythmExercise() {
    let minutes = null;
    let seconds = null;
    let timer: number = 60 * 5;
    const duration = timer;
    const display = document.querySelector('#timer');

    useEffect(() => {
        startTimer();
        document
            .querySelector('#rhythm-img')!
            .setAttribute('src', `img/${localStorage['rhythm']}.gif`);
    }, []);

    function startTimer() {
        setInterval(() => {
            minutes = parseInt(String(timer / 60), 10);
            seconds = parseInt(String(timer % 60), 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display!.textContent = minutes + ':' + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    return (
        <div>
            <div className="row">
                <img id="rhythm-img" src="../../img/rust-4.gif" />
            </div>

            <strong id="timer"></strong>
            <div>
                <a href="index.html" className="btn btn-warning">
                    Retour
                </a>
            </div>
        </div>
    );
}
