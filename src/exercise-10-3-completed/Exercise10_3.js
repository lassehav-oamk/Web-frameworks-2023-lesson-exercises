import React, { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import OtherComponent from './OtherComponent';
import ThemeProvider from './ThemeProvider';

/* This is a starting point for the exercise.
   It contains a theme switching functionality implemented with 
   normal state and props passing.

   Your task is to convert it to use the Context API instead. */

export default function Exercise10_3() {

  return (
    <div >
      <ThemeProvider>
        <h1>Theme Switcher App</h1>
        <ThemeSwitcher />
        <OtherComponent />
      </ThemeProvider>
    </div>
  );
}