import React, { useEffect } from 'react';
import incorrect from 'assets/icons/incorrect.png';

const Incorrect = ({ setNav }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setNav('RESULTS');
        }, 700);
        return () => clearTimeout(timer);
    }, [setNav]);

    return (
        <div className="trivia-correct-container">
            <div className="answer-background">
                <img
                    src={incorrect}
                    alt="incorrect"
                    className="correct-img" />
            </div>
        </div>
    )
}

export default Incorrect;