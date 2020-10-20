import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitch = () => {
    const theme = useContext(ThemeContext);
    
    return (
        <button className={`theme-switch theme-switch-${theme['🎉'] ? 'party' : 'business'}`} onClick={() => theme.toggle()} type="button" role="switch" aria-checked={theme['🎉']}>
            <span className={`${theme['🎉'] ? 'theme-inactive' : 'theme-active'}`} role="img" aria-label="Business Mode">💼</span>
            <span className={`${theme['🎉'] ? 'theme-active' : 'theme-inactive'}`} role="img" aria-label="Party Mode">🎉</span>
        </button>
    )
}

export default ThemeSwitch;