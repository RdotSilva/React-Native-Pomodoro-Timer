import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	progress: {
		backgroundColor: 'blue',
		height: 100,
		width: 100
	}
});

const ProgressBar = props => <View style={styles.progress} />;

ProgressBar.propTypes = {
	timeRemaining: PropTypes.number,
	timeTotal: PropTypes.number,
	isRunning: PropTypes.bool
};

export default ProgressBar;
