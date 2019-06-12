import React from "react";
import { Font } from 'expo';
import { StyleSheet, Text, View } from "react-native";

export default class TextViewSample extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			fontLoaded: false,
		};

	}

	async componentDidMount () {
		await Font.loadAsync ({'samplefont': require ('./samplefont.ttf')});
		this.setState ({fontLoaded: true});
	}

	message () {
		return "This is important text";
	}

	render () {
		return (
			this.state.fontLoaded ? (
        <View>
          <Text style={{fontFamily: 'samplefont', fontSize: 16}}>Text components</Text>
          <Text>Text can have nested text like this
            <Text>{this.message ()}</Text>
            And it"s awesome.
          </Text>
        </View>
			) : null);
	}
}

const styles = StyleSheet.create ({
	title: {
		fontSize: 14
	},
});

