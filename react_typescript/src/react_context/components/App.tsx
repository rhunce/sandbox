import '../styles/App.css';
import React from 'react';
import { Toolbar } from './Toolbar';
import { ThemeContextInterface } from '../interfaces';

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: '', themeText: ''});

const initialThemeContext: ThemeContextInterface = {
  theme: 'light',
  themeText: 'I am the light at the end of the tunnel.....'
};

export const App: React.FC = (): JSX.Element => {
  return (
    <ThemeContext.Provider value={initialThemeContext}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}