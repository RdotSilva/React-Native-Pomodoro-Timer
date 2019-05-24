import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	progress: {
		backgroundColor: 'blue',
		height: 100,
		width: 100
	}
});
export default props => <View style={styles.progress} />;
