import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeReamining: '25:00',
			isStarted: false
		};
	}
	render() {
		return <div />;
	}
}

export default Timer;
