import React, {useState} from 'react';
import Clock from './Clock';
import ThemeSwitch from './ThemeSwitch';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState({'🎉': false});

  const toggle = () => {
      const party = !theme['🎉'];
      setTheme({'🎉': party });
  };

  return (
    <ThemeContext.Provider
      value={{
          '🎉': theme['🎉'],
          toggle
      }}
    >
      <div className={`app ${theme['🎉'] ? 'app-party' : 'app-business'}`}>
        <ThemeSwitch />
        <Clock />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
