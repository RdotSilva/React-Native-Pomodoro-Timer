import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	progress: {
		backgroundColor: 'blue',
		height: 10,
		width: 1
	}
});

class ProgressBar extends React.Component {
	state = {
		percent: new Animated.Value(0)
	};

	componentDidMount() {
		this.animation = Animated.timing(this.state.percent, {
			toValue: 100,
			duration: this.props.timeRemaining,
			easing: Easing.linear,
			useNativeDriver: true
		});
		this.animation.start();
	}

	render() {
		const { percent } = this.state;
		const { width } = Dimensions.get('window');
		return (
			<Animated.View
				style={[styles.progress, { transform: [{ scaleX: percent }] }]}
			/>
		);
	}
}

ProgressBar.propTypes = {
	timeRemaining: PropTypes.number,
	timeTotal: PropTypes.number,
	isRunning: PropTypes.bool
};

export default ProgressBar;
