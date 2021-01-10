import React from 'react';
import CustomButton from 'components/CustomButton';
import correct from 'assets/icons/correct.png';
import './styles.css';

const Correct = (props) => {
    return (
        <div className="trivia-correct-container">
            <div className="answer-background">
                <img
                    src={correct}
                    alt="correct"
                    className="correct-img" />
            </div>
            <CustomButton
                handleClick={props.nextQuestion}
                text="Next"
            />
        </div>
    )
}

export default Correct;