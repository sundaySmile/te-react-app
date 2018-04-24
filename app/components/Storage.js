// Build a React component step-by-step using render props to understand how to implement the pattern
// "render prop" 是一种简单的技术，是使用 function形式的prop分享React components之间代码的简单技术
import React from 'react';

const SECRET_TO_LIFE = 42;

class Storage extends React.Component {
	state = {
		localStorageAvailable: false, 
	};
	componentDidMount() {
		this.checkLocalStorageExists();
	}

	checkLocalStorageExists() {
		const testKey = 'test';

		try {
			localStorage.setItem(testKey, testKey);
			localStorage.removeItem(testKey);
			this.setState({ localStorageAvailable: true });
		} catch(e) {
			this.setState({ localStorageAvailable: false });
		} 
	}
  
	load = (key) => {
		if (this.state.localStorageAvailable) {
			return localStorage.getItem(key); 
		}
		
		return null;
	}
    
	save = (key, data) => {
		if (this.state.localStorageAvailable) {
			localStorage.setItem(key, data);
		}
	}

	remove = (key) => {
		if (this.state.localStorageAvailable) {
			localStorage.removeItem(key);
		}
	}

	render() {
		return (
			<span>
				{
					this.props.render({
						load: this.load,
						save: this.save,
						remove: this.remove,
					})
				}	
			</span>
		);
	}
}

export default Storage;