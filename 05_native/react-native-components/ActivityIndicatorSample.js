import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default class ActivityIndicatorSample extends Component {
	constructor () {
		super ();
		this.state = {loading: true}
	}

	componentDidMount () {
		setTimeout (() => this.setState ({loading: false}), 6000);
	}

	render () {
		return (
			<ActivityIndicator
				animating={this.state.loading}
				color='#0f0'
				size="large"
				style={styles.activityIndicator}/>
		);
	}
}

const styles = StyleSheet.create ({
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
	}
})