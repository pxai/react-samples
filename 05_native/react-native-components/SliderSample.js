import React, { Component } from "react";
import { StyleSheet, Slider, View, Text } from "react-native";

export default class SliderSample extends Component {
	constructor (props) {
		super (props);
		this.state = {speed: 50};
	}

	slideChanged (value) {
		this.setState ({speed: Math.round (value)});
		console.log ("Slider was changed: ", this.state.speed);
	}

	render () {
		return (
			<View>
				<Slider
					minimumValue={0}
					maximumValue={100}
					value={this.state.speed}
					style={styles.picker}
					onValueChange={this.slideChanged.bind (this)}
					onSlidingComplete={this.slideChanged.bind (this)}>
				</Slider>
				<Text>{this.state.speed}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	picker: {
		height: 50, width: 100
	},
});