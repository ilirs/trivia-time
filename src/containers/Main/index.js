import React, { useState } from 'react';
import Question from 'components/Question';
import Correct from 'components/Correct';
import Incorrect from 'components/Incorrect';
import Results from 'components/Results';
import Welcome from 'components/Welcome';
import { convertDifficultyLevel } from 'utils/CommonUtils';
import { API_URL } from 'config';
import axios from 'axios';
import './styles.css';

const Main = () => {

    const [selectedLevel, setSelectedLevel] = useState('Go easy on me');
    const [allQuestions, setAllquestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [nav, setNav] = useState('');

    const handlePlay = () => {
        setLoading(true);
        getQuestions();
    }

    const getQuestions = () => {
        const level = convertDifficultyLevel(selectedLevel);
        setLoading(true);

        axios.get(`${API_URL}&difficulty=${level}&type=multiple`)
            .then(res => {
                setAllquestions(res.data);
                setLoading(false);
                setNav('QUESTION');
            }).catch(err => console.log(err))
    }

    const checkAnswer = (ans) => {
        if (ans === allQuestions.results[question].correct_answer) {
            setScore(score + 1);
            setQuestion(question + 1);
            if (question === allQuestions.results.length - 1) {
                setNav('RESULTS');
            }
            else {
                setNav('CORRECT');
            }
        }
        else {
            setNav('INCORRECT');
        }
    }

    const nextQuestion = () => {
        setNav('QUESTION');
    }

    const playAgain = () => {
        setScore(0);
        setQuestion(0);
        setNav('');
    }

    switch (nav) {
        case 'QUESTION': {
            return (
                <Question
                    question={allQuestions.results[question]}
                    checkAnswer={checkAnswer} />
            )
        }
        case 'CORRECT': {
            return (
                <Correct
                    nextQuestion={nextQuestion} />
            )
        }
        case 'RESULTS': {
            return (
                <Results
                    score={score}
                    playAgain={playAgain} />
            )
        }
        case 'INCORRECT': {
            return (
                <Incorrect
                    setNav={setNav} />
            )
        }
        default:
            return (
                <Welcome
                    selected={selectedLevel}
                    loading={loading}
                    handleSelectLevel={setSelectedLevel}
                    handlePlay={handlePlay} />
            )
    }
}

export default Main;