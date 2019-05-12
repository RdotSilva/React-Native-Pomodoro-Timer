import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
