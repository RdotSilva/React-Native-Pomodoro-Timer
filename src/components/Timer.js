import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const timerDuration = 15000; // Total time left in ms

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeReamining: '25:00',
			isStarted: false
		};
	}

	timer = () => {
		timeLeft = timerDuration - (Date.now() - startTime / 1000);
		minutes = (timeLeft / 60) | 0;
		seconds = timeLeft % 60 | 0;

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		if (timeLeft > -1) {
			this.setState({
				timeRemaining: minutes + ':' + seconds
			});
		} else {
			this.stopCountdown();
		}
	};
	render() {
		return <div />;
	}
}

export default Timer;
