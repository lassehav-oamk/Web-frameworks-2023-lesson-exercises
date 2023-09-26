import React from 'react'
import themeStyles from './Themes.module.css';

export default function OtherComponent({theme}) {
  const themeStyle = theme === 'light' ? themeStyles.lightTheme : themeStyles.darkTheme;

  return (
    <div className={themeStyle}><h1>This is Other Component</h1>
      <p>This component is doing something and it is using theme for 
        rendering its content.
      </p>
      <p>
        Current theme value is: <b>{theme}</b>
      </p>
    </div>
  )
}
