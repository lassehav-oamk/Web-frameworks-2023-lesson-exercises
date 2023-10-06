import React, { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import OtherComponent from './OtherComponent';

/* This is a starting point for the exercise.
   It contains a theme switching functionality implemented with 
   normal state and props passing.

   Your task is to convert it to use the Context API instead. */


export default function Exercise10_3() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };  

  return (
    <div >
      <h1>Theme Switcher App</h1>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <OtherComponent theme={theme} />
    </div>
  );
}
