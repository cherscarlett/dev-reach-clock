import {createContext} from 'react';

const defaultTheme = {
    '🎉': false,
    toggle: () => {}
};

const ThemeContext = createContext(defaultTheme);

export { ThemeContext };