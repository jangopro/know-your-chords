import React from 'react';
import './App.scss';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameInterface from './components/pages/GameInterface';
import RhythmExercise from './components/pages/RhythmExercise';

const App: React.FC = () => {
    return (
        <div>
            <div>
                <h1>Know Your Chords</h1>

                <Router>
                    <Switch>
                        <Route path="/game-interface">
                            <GameInterface />
                        </Route>
                        <Route path="/rhythm-exercise">
                            <RhythmExercise />
                        </Route>
                        <Route path="/exercise/:id">
                            <RhythmExercise />
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
