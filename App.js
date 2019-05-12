import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/components/Timer';
import Buttons from './src/components/Buttons';
import Label from './src/components/Label';

fomartTime = time => {
	if (parseInt(time) < 10) {
		return '0' + time.toString();
	} else {
		return time.toString();
	}
};

getTime = x => {
	return formatTime(x) + ':00';
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: "25:00",
			workTime: "25:00",
			breakTime: "05:00",
			working: true,
			timer: null,
			paused: false,
			playing, false
		}
	}

	setWorkTimer(x) {
		let newTime = getTime(x);
		this.setState({
		  workTime: newTime,
		});
		if (!this.state.timer) {
		  this.setState({
			currentTime: newTime,
		  });
		}      
	}

	setBreakTimer(x) {
		let newTime = getTime(x);
		this.setState({
		  breakTime: newTime,
		});
	}

	playButton() {
		if (this.state.paused === true || this.state.playing === false) { 
		  this.setState({
			timer: setInterval(this.countdown, 1000),
			paused: false,
			playing: true,
		  });
		}
	}

	pauseButton () {
		if (this.state.paused === false && this.state.playing === true) {
		  clearInterval(this.state.timer);
		  this.setState({
			paused: true,
			timer: null,
			playing: false
		  });
		  console.log(this.state.paused);
		} else if (this.state.paused === true && this.state.playing === false) {
		  this.playButton();
		}       
	}

	render() {
		return (
			<div>

			</div>
		);
	}
}

export default App;
