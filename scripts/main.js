import React from 'react';
import ReactDOM from 'react-dom';
import Audiolet from '../audiolet.js';

class App extends React.Component {
	AudioletApp() {
        this.audiolet = new Audiolet();
        this.sine = new Sine(this.audiolet, 440);
        this.sine.connect(this.audiolet.output);
	}
	render() {
		return(
			<div className="piano" onClick={this.AudioletApp()}></div>
		)
	}
}

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(<App />, main);