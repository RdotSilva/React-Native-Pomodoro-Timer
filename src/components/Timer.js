import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const timerDuration = 15000; // Total time left in ms
const initialTime = '25:00'; // initial timer display
let timerInterval, startTime, timeLeft, minutes, seconds;

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeRemaining: initialTime,
			isStarted: false
		};
	}

	handleClick = event => {
		if (this.state.isStarted) {
			this.stopCountdown();
		} else {
			this.startCountdown();
		}
	};

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

	startCountdown = () => {
		startTime = Date.now();
		this.timer();
		timerInterval = setInterval(this.timer, 1000);
		this.setState({
			isStarted: true
		});
	};

	stopCountdown = () => {
		clearInterval(timerInterval);
		this.setState({
			timeRemaining: initialTime,
			isStarted: false
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Button
					style={styles.button}
					onPress={this.handleClick}
					title={this.state.isStarted ? 'stop timer' : 'start timer'}
				/>
				<Text style={styles.timer}>{this.state.timeRemaining}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		backgroundColor: 'white',
		color: 'tomato',
		fontSize: 40,
		padding: 10,
		textAlign: 'center'
	},
	timer: {
		color: 'white',
		fontSize: 75,
		textAlign: 'center',
		margin: 10
	}
});
