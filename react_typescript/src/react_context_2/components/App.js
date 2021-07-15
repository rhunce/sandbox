import React from 'react';
import { ThemeContext, themes } from '../themeContext.js';
import ThemedButton from './ThemedButton.js';
import Toolbar from './Toolbar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div style={{ margin: '25px 0 0 10px' }}>
        <div>
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          <span style={{ marginLeft: '10px' }}>Wrapped in provider</span>
        </div>
        <br />
        <div>
          <ThemedButton />
          <span style={{ marginLeft: '10px' }}>Not Wrapped in provider</span>
        </div>
      </div>
    );
  }
}

export default App;