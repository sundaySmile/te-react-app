import React, { Component } from 'react';
import styles from './Greeter.css';
import avatarPic from './assets/extract-text.jpg';

class Greeter extends Component {
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
				<p>Hi, every body</p>
			</div>
    );
  }
}

export default Greeter;
