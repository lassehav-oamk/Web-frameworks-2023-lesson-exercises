import React from 'react'
import themeStyles from './Themes.module.css';

export default function ThemeSwitcher({ theme, toggleTheme }) {

  let themeStyle = null;
  if(theme === 'light') {    
    themeStyle = themeStyles.lightTheme;
  } else {
    themeStyle = themeStyles.darkTheme;
  }

  return (
    <div className={themeStyle}>
      <h1>This is theme switcher component</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
