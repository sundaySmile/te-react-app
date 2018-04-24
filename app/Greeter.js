import React, { Component } from 'react';
import styles from './Greeter.css';
import avatarPic from './assets/extract-text.jpg';
import SayHello from './components/ComponentNeedingStorage.js';

class Greeter extends Component {
	// state = {
	// 	avatarPic
	// };
	constructor(props) {
		super(props);
		this.state = {
			avatarPic
		}
	}
  render() {
    return (
			<div className={styles.Root}>
				<img src={this.state.avatarPic} className={styles.avatar} />
				<p>Hi, {this.props.name}</p>
				<SayHello />
			</div>
    );
  }
}

export default Greeter;
