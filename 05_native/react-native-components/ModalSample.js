import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class ModalSample extends Component {
	constructor (props) {
		super (props);
		this.state = {modalVisible: false};
	}

	toggleModal (visible) {
		this.setState ({modalVisible: visible});
	}

	render () {
		return (
			<View style={styles.container}>
				<Modal animationType={"slide"} transparent={false}
							 visible={this.state.modalVisible}
							 onRequestClose={() => {
								 console.log ("Modal has been closed.")
							 }}>

					<View style={styles.modal}>
						<Text style={styles.text}>Modal is open!</Text>
						<TouchableHighlight style={styles.touchable}
																onPress={this.toggleModal.bind (this, !this.state.modalVisible)}>
							<Text style={styles.text}>Close Modal</Text>
						</TouchableHighlight>
					</View>
				</Modal>

				<TouchableHighlight style={styles.touchable} onPress={this.toggleModal.bind (this, true)}>
					<Text>Open Modal</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		alignItems: 'center'
	},
	touchable: {
		backgroundColor: 'red',
		padding: 8
	},
	modal: {
		flex: 1,
		backgroundColor: 'gray',
		alignItems: 'center',
		padding: 4
	}
})