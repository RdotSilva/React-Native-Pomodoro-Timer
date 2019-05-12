import React from 'react';
import { Text, StyleProp } from 'react-native';

export default class Timer extends React.Component {
	render() {
		return <Text style={style.timer}>{this.props.currentTime}</Text>;
	}
}
