import React from 'react'
import { render } from 'react-dom'
import Greeter from './Greeter.js'
// import App from 'context';
import 'main.css'

render(<Greeter name="world" />, document.getElementById('root'))
// render(<App />, document.getElementById('root'))
