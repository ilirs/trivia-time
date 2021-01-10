import React from 'react';
import next from './../assets/icons/next.png';
import repeat from './../assets/icons/repeat.png';
import './styles.css';
const CustomButton = ({ handleClick, loading, text }) => {
    return (
        <div className="trivia_btn"
            onClick={!loading ? handleClick : () => { return false }}>
            {loading ?
                <span
                    className="spinner-border spinner-border-sm"
                    style={{ color: 'white' }}></span> :
                <React.Fragment>

                    {text === 'Next' && (
                        <img
                            className="repeat"
                            src={next}
                            alt="star"
                            width="35"
                            height="35" />
                    )}
                    {text === 'Play again' && (
                        <img
                            className="repeat"
                            src={repeat}
                            alt="star"
                            width="35"
                            height="40" />
                    )}
                    <div className="trivia_btn-text">
                        {text}
                    </div>
                </React.Fragment>}
        </div>
    )
}

export default CustomButton;