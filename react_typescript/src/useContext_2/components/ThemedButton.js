import React from 'react';
import { ThemeContext } from '../themeContext';

class ThemedButton extends React.Component {
  // static contextType = ThemeContext; // Can use this ...
  render() {
    let props = this.props;
    let theme = this.context;
    return <button {...props} style={{ backgroundColor: theme.background }}>Change Theme</button>;
  }
}
ThemedButton.contextType = ThemeContext; // ... or this

export default ThemedButton;