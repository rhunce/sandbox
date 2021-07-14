import { useState } from 'react';
import { ButtonProps } from '../interfaces';

export const Button: React.FC<ButtonProps> = ({ theme, themeText }: ButtonProps): JSX.Element => {
  const [myTheme, setMyTheme] = useState(theme);
  const [myThemeText, setMyThemeText] = useState(themeText);

  const lightMode: boolean = myTheme === 'light';

  const changeTheme = () => {
    setMyTheme(lightMode ? 'dark' : 'light')
    setMyThemeText(
      myThemeText === 'I am the light at the end of the tunnel.....' ?
      'I am the darkness in your soul!' :
      'I am the light at the end of the tunnel.....'
    )
    lightMode ?
      document.body.setAttribute('style', 'background-color: black;') :
      document.body.setAttribute('style', 'background-color: white;');
  };

  return(
    <div>
      <button
        className={ lightMode ? 'btn light_btn' : 'btn dark_btn' }
        onClick={changeTheme}
      >
        Change Theme
      </button>
      <div className={ lightMode ? 'light_mode_text' : 'dark_mode_text' }>{`${myTheme} mode`}</div>
      <div className={ lightMode ? 'light_mode_text' : 'dark_mode_text' }>{myThemeText}</div>
    </div>
  );
}