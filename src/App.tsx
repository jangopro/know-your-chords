import * as React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChordsExercise from './components/pages/ChordsExercise';
import RhythmExercise from './components/pages/RhythmExercise';
import GuessNoteExercise from './components/pages/GuessNoteExercise';

const App: React.FC = () => {
    return (
        <div>
            <div>
                <h1>Know Your Chords</h1>

                <Router>
                    <Switch>
                        <Route path="/game-interface">
                            <ChordsExercise />
                        </Route>
                        <Route path="/rhythm-exercise">
                            <RhythmExercise />
                        </Route>
                        <Route path="/exercise/:id">
                            <GuessNoteExercise />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default App;
