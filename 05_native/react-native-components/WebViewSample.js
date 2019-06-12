import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native';

export default class WebViewSample extends Component {
	render () {
		return (
			<View style={styles.container}>
				<WebView source={{uri: 'https://duckduckgo.com/'}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		width: 1000,
		height: 400
	}
});