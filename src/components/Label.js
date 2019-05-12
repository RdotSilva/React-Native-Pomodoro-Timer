import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.Create({
	label: {
		fontSize: 40,
		marginTop: 20,
		marginBottom: 25,
		alignSelf: 'center'
	},
	smallLabel: {
		fontSize: 25,
		marginTop: 20,
		marginBottom: 25,
		alignSelf: 'center'
	},
	labelContainer: {
		height: 60,
		justifyContent: 'flex-start'
	}
});

export default class Label extends Component {
	render() {
		return (
			<View>
				<View style={style.labelContainer}>
					{!this.props.paused && !this.props.playing && (
						<Text style={style.smallLabel}>
							Press play to start
						</Text>
					)}
					{this.props.paused && (
						<Text style={style.smallLabel}>PAUSED</Text>
					)}
				</View>
				<Text style={style.label}>
					{this.props.working ? 'work time' : 'break time'}
				</Text>
			</View>
		);
	}
}
