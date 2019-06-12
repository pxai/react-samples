import React, { Component } from "react";
import { StyleSheet, Picker, View, Text } from "react-native";

export default class PickerSample extends Component {
	constructor (props) {
		super (props);
		this.state = {framework: "React"};
	}

	selectionChanged (value) {
		this.setState ({framework: value});
		console.log ("Button was pressed: ", this.state.framework);
	}

	render () {
		return (
			<View>
				<Picker
					selectedValue={this.state.framework}
					style={styles.picker}
					onValueChange={this.selectionChanged.bind (this)}>
					<Picker.Item label="React" value="react"/>
					<Picker.Item label="Vue" value="vue"/>
					<Picker.Item label="Angular" value="angular"/>
				</Picker>
				<Text>Selected: {this.state.framework}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	picker: {
		height: 50, width: 200
	},
});