import React, { Component } from 'react';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.Root}>Hi, every body</div>
    );
  }
}

export default Greeter;
