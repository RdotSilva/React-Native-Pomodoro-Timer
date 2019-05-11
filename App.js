import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/components/Timer';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Pomodoro Timer!</Text>
				<Timer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontSize: 30,
		textAlign: 'center',
		margin: 80
	}
});
