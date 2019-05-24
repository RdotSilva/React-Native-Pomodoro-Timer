import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	progress: {
		backgroundColor: 'blue',
		height: 10
	}
});

class ProgressBar extends React.Component {
	render() {
		const { props } = this;
		const { width } = Dimensions.get('window');
		const percent = 1 - props.timeRemaining / props.timeTotal;
		return <View style={[styles.progress, { width: percent * width }]} />;
	}
}

ProgressBar.propTypes = {
	timeRemaining: PropTypes.number,
	timeTotal: PropTypes.number,
	isRunning: PropTypes.bool
};

export default ProgressBar;
