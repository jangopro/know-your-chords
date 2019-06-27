const chords = ['A', 'Em', 'C', 'G', 'D', 'Am', 'E', 'F'];
const chords7th = ['A7', 'B7', 'C7', 'G7', 'D7', 'E7', 'Fmaj7'];
const { notes, showImages } = localStorage;
const timer = Number(localStorage['timer']);

let chordPlaying;

let timerCounter = timer;
document.querySelector('#timer').innerHTML = timerCounter;

if (showImages === 'true') {
    const imgTags = document.querySelectorAll('.img');
    imgTags.forEach(function(imgTag) {
        imgTag.classList.remove('hidden');
    });
}

if (notes === 'normal') {
    init(chords);
} else if (notes === '7th') {
    init(chords7th);
} else if (notes == 'both') {
    const arrayCombined = chords.concat(chords7th);
    init(arrayCombined);
}

function init(chordsToPlay) {
    chordPlaying = getRandomChord(chordsToPlay);
    showChords(chordsToPlay);
    setInterval(function() {
        showChords(chordsToPlay);
    }, timer * 1000);
}

//Rechercher un nouvel accord
function getRandomChord(arrayChords) {
    return arrayChords[Math.floor(Math.random() * arrayChords.length)];
}

function showChords(chords) {
    let nextChordToBePlayed = getRandomChord(chords);
    showChord('.chord', chordPlaying);
    showChord('.next-chord', nextChordToBePlayed);
    chordPlaying = nextChordToBePlayed;
}

function showChord(selector, chord) {
    document.querySelector(selector).innerHTML = chord;
    if (showImages === 'true') {
        document
            .querySelector(`${selector}-img`)
            .setAttribute('src', `img/${chord}.gif`);
    }
}

//Change d'accord aux 4 secondes
setInterval(function() {
    timerCounter--;
    document.querySelector('#timer').innerHTML = timerCounter;
    if (timerCounter === 1) {
        timerCounter = timer + 1;
    }
}, 1000);
