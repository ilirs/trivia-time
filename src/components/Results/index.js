import React from 'react';
import CustomButton from 'components/CustomButton';
import './styles.css';

const Results = ({ playAgain, score }) => {
    return (
        <div className="trivia-correct-container">
            <div className="answer-background">
                <div className="score">{score}</div>
            </div>
            <CustomButton
                handleClick={playAgain}
                text="Play again"
            />
        </div>
    )
}

export default Results;