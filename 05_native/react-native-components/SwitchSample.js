import React, { Component } from "react";
import { StyleSheet, Switch, View, Text } from "react-native";

export default class SwitchSample extends Component {
	constructor (props) {
		super (props);
		this.state = {enabled: false, show: "OFF"};
	}

	switchChanged (value) {
		this.setState ({enabled: value, show: value ? "ON" : "OFF"});
		console.log ("changed: ", this.state.enabled);
	}

	render () {
		return (
			<View style={styles.container}>
				<Switch
					value={this.state.enabled}
					style={styles.switch}
					trackColor={this.state.enabled ? styles.ok : styles.nope}
					onValueChange={this.switchChanged.bind (this)}>
				</Switch>
				<Text>State: {this.state.show}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	switch: {
		marginTop: 2
	},
	ok: {
		color: "green"
	},
	nope: {
		color: "red"
	}
});