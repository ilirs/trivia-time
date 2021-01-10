import React from 'react';
import CustomSelect from 'components/CustomSelect';
import { shuffle, cleanString } from 'utils/CommonUtils';
import './styles.css';

const Question = ({ question, checkAnswer }) => {

    let answers = [...question.incorrect_answers, question.correct_answer];

    return (
        <div className="trivia-container">
            <div className="question">
                {cleanString(question.question)}
            </div>
            <CustomSelect
                selected={-1}
                handleSelect={checkAnswer}
                options={shuffle(answers)} />
        </div>
    )
}

export default Question;