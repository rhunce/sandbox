import './App.css';
import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext('');
console.log('ThemeContext: ', ThemeContext);

function App() {
  return (
    <ThemeContext.Provider value='light'>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// ====================================================================================

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// ====================================================================================

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return(
    <Button theme={theme} />
  );
}

// ====================================================================================

interface ButtonProps {
  theme: string
}
function Button({ theme }: ButtonProps) {

  const [myTheme, setMyTheme] = useState(theme);

  const changeTheme = () => {
    setMyTheme(myTheme === 'dark' ? 'light' : 'dark')
    myTheme === 'dark' ?
      document.body.setAttribute('style', 'background-color: white;') :
      document.body.setAttribute('style', 'background-color: black;');
  };

  return(
    <div>
      <button
        className={ myTheme === 'light' ? 'btn light_btn' : 'btn dark_btn' }
        onClick={changeTheme}
      >
        Change Theme
      </button>
      <div className={ myTheme === 'light' ? 'light_mode_text' : 'dark_mode_text' }>{`${myTheme} mode`}</div>
    </div>
  );
}

export default App;