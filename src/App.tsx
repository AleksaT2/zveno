import { useState } from 'react';
import './App.css';

function App() {
    const [score, setScore] = useState(0);
    const [bank, setBank] = useState(0);

    const addScore = () => {
        setScore(score + 100);
    };

    const bankScore = () => {
        setBank(bank + score);
        setScore(0);
    };

    const resetScores = () => {
        setScore(0);
    };

    return (
        <div className="counter-container">
            <h1>Счетчик очков</h1>
            <div className="score-display">
                <h2>Очки: <span>{score}</span></h2>
            </div>
            <div className="bank-display">
                <h2>Банк: <span>{bank}</span></h2>
            </div>
            <button onClick={addScore}>+</button>
            <button onClick={bankScore}>Банк</button>
            <button onClick={resetScores}>Обнулить</button>
        </div>
    );
}

export default App;
