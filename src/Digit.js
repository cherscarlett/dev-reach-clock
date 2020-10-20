import React, { useContext } from 'react';
import Pixel from './Pixel';
import randomColor from 'randomcolor';
import { ThemeContext } from './ThemeContext';

const digits = {
	'0': [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
	'1': [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	'2': [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
	'3': [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
	'4': [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
	'5': [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
	'6': [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
	'7': [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	'8': [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
	'9': [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
	':': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
};

const colors = randomColor({count: 15});

const Digit = ({digit}) => {
    const theme = useContext(ThemeContext);

    const pixels = digits[digit].map((binary, index) => {return {active: binary, color: theme['🎉'] ? colors[index] : "#000" }});

    return (
        <div className="digit">
            {pixels.map((pixel, index) => <Pixel key={index} {...pixel} />)}
        </div>
    )
}

export default Digit;