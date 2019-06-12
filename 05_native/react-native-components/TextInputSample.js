import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

export default class TextInputSample extends Component {
	constructor (props) {
		super (props);
		this.state = {text: "Default text"};
	}

	textChanged (event) {
		this.setState ({text: event.value});
		console.log ("Text changed: ", this.state.text);
	}

	render () {
		return (
			<TextInput style={styles.textInput}
								 onChangeText={this.textChanged.bind (this)}
								 value={this.state.text}
			/>
		);
	}
}

const styles = StyleSheet.create ({
	textInput: {
		padding: 1, borderColor: "gray", borderWidth: 1
	},
});