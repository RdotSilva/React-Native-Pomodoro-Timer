import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
	button: {
		marginHorizontal: 5,
		marginBottom: 20
	}
});

export default class Buttons extends Component {
	render() {
		return (
			<View style={style.button}>
				<Button title={this.props.title} onPress={this.props.onPress} />
			</View>
		);
	}
}
