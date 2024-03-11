import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  // State to track the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    // Toggle the theme value
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    // Save the theme preference in local storage
   localStorage.setItem('themenew', newTheme ? 'dark' : 'light');

  };

  // Effect to set the initial theme based on local storage
//   useEffect(() => {
  //   const savedTheme = localStorage.getItem('themenew');
    // setIsDarkTheme(savedTheme === 'dark');
  //}, []);

  return (
    <div style={{ background: isDarkTheme ? '#000' : '#fff', color: isDarkTheme ? '#fff' : '#000',
     height: '100vh', textAlign: 'center' }}>
      <h1>Theme Switcher ON</h1>
      <p>This is a sample text with changing background theme.</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
