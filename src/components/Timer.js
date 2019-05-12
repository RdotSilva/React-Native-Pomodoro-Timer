import React from 'react';
import { Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
	timer: {
		fontSize: 50,
		borderRadius: 5,
		borderBottomWidth: 2,
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		paddingLeft: 6,
		paddingRight: 3,
		position: 'absolute',
		top: 100
	}
});

export default class Timer extends React.Component {
	render() {
		return <Text style={style.timer}>{this.props.currentTime}</Text>;
	}
}
