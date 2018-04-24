import React, { Component } from 'react';
import { ThemeContext, themes } from './topic-context/theme-context';
import ThemedButton from './topic-context/themed-button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme
    };

		this.toggleTheme = () => {
			console.log('theme', state.theme);
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
	}
	
	componentDidMount() {
		//
	}

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}

function Content() {
	return (
		<div>
			<ThemedButton />
		</div>
	)
}
export default App;
