import React from 'react';
import CustomButton from 'components/CustomButton';
import CustomSelect from 'components/CustomSelect';

const Welcome = ({
    selected,
    handleSelectLevel,
    handlePlay,
    loading }) => {
    const options = [
        "Go easy on me",
        "Bring it on",
        "Insanity mode"];

    return (
        <div className="trivia-container">
            <div className="title">
                TriviaTime
        </div>
            <div className="sub-title">
                Pick your level <br />
            of difficulty
        </div>
            <CustomSelect
                selected={selected}
                handleSelect={handleSelectLevel}
                options={options} />
            <CustomButton
                handleClick={handlePlay}
                text="Play Now"
                loading={loading}
            />
        </div>
    )
}

export default Welcome;