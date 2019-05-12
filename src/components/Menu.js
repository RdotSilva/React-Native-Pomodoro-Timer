import React, { Component } from 'react';
import { Picker, StyleSheet, TextInput } from 'react-native';

const style = StyleSheet.create({
	minuteInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
	}
});

let list = [];
for (let i = 0; i < 60; i++) {
	list.push(i.toString());
}

export default class Menu extends Component {
	render() {
		return (
			<TextInput
				style={style.minuteInput}
				placeholder={this.selected}
				onChangeText={this.props.onValueChange}
			/>
		);
	}
}
