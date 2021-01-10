import React from 'react';
import star from 'assets/icons/star.png';
import { cleanString } from 'utils/CommonUtils';
import './styles.css';

const CustomSelect = ({ handleSelect, selected, options }) => {
    return (
        options.map((opt, index) =>
            <div className="trivia_select"
                key={index}
                onClick={() => handleSelect(opt)}>
                {selected === opt &&
                    <img
                        className="star"
                        src={star}
                        alt="star"
                        width="35"
                        height="35" />}
                <div className="trivia_select-text">
                    {cleanString(opt)}
                </div>
            </div>
        )
    )
}

export default CustomSelect;