import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Buttons extends Component {
	render() {
		return (
			<View style={style.button}>
				<Button title={this.props.title} onpress={this.props.onPress} />
			</View>
		);
	}
}
