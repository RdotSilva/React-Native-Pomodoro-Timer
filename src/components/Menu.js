import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

const style = StyleSheet.create({
	menu: {
		marginLeft: 10,
		marginRight: 10,
		width: 90,
		height: 35
	}
});

let list = [];
for (let i = 0; i < 60; i++) {
	list.push(i.toString());
}

export default class Menu extends Component {
	render() {
		return (
			<Picker
				style={style.menu}
				mode="dropdown"
				onValueChange={this.props.onValueChange}
				selectedValue={this.props.selected}
			>
				{list.map(num => {
					return <Picker.Item label={num} value={num} key={num} />;
				})}
			</Picker>
		);
	}
}
