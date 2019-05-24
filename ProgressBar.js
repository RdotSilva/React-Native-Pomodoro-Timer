import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	progress: {
		backgroundColor: 'blue',
		height: 100,
		width: 100
	}
});

const ProgressBar = props => {
	const { width } = Dimensions.get('window');
	return <View style={[styles.progress, { width: width }]} />;
};

ProgressBar.propTypes = {
	timeRemaining: PropTypes.number,
	timeTotal: PropTypes.number,
	isRunning: PropTypes.bool
};

export default ProgressBar;
