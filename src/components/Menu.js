import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

let list = [];
for (let i = 0; i < 60; i++) {
	list.push(i.toString());
}

export default class Menu extends Component {
	render() {
		return (
			<Picker
				style={styles.menu}
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
