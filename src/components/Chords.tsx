import React, { Component } from 'react';

export default function Chords() {
    // TODO doesn't work anymore
    function validateForm() {
        const timer = document.querySelector('#timer') as HTMLInputElement;
        const chordsChecked = document.querySelectorAll(
            'input[name="notes"]:checked'
        ) as NodeListOf<HTMLInputElement>;
        const chordsToBePlayed: string[] = [];
        Array.from(chordsChecked).forEach(chordChecked => {
            chordsToBePlayed.push(chordChecked.value);
        });
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
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="timer">Timer:</label>
                            <input className="form-control" type="text" name="timer" id="timer" />
                        </div>
                    </div>
                    <div className="col">
                        <h3>Chords:</h3>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="normal"
                                    value="normal"
                                    name="notes"
                                />
                                <label className="form-check-label" htmlFor="normal">
                                    Normal
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="7th"
                                    value="7th"
                                    name="notes"
                                />
                                <label className="form-check-label" htmlFor="7th">
                                    7th
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="sus"
                                    value="sus"
                                    name="notes"
                                />
                                <label className="form-check-label" htmlFor="sus">
                                    Sus Shapes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="slash"
                                    value="slash"
                                    name="notes"
                                />
                                <label className="form-check-label" htmlFor="slash">
                                    Slash Chords
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="all"
                                    value="all"
                                    name="notes"
                                />
                                <label className="form-check-label" htmlFor="all">
                                    All
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check  form-check-inline">
                        <input
                            type="radio"
                            name="showImagesOptions"
                            className="form-check-input"
                            id="showImages"
                            value="true"
                        />
                        <label className="form-check-label" htmlFor="showImages">
                            With Images
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="showImagesOptions"
                            className="form-check-input"
                            id="hideImages"
                            value="false"
                        />
                        <label className="form-check-label" htmlFor="hideImages">
                            No Images
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Let's Play!
                </button>
            </form>
        </div>
    );
}
