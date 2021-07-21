import { useContext } from 'react';
import { ThemeContextInterface } from '../interfaces';
import { ThemeContext } from './App';
import { Button } from './Button';


export const ThemedButton: React.FC = (): JSX.Element => {
  const currentTheme: ThemeContextInterface = useContext<ThemeContextInterface>(ThemeContext)
  return(
    <Button theme={currentTheme.theme} themeText={currentTheme.themeText}/>
  );
}