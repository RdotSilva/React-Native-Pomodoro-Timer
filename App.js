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
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Pomodoro Timer!</Text>
				<Timer />
			</View>
		);
	}
}

export default App;
