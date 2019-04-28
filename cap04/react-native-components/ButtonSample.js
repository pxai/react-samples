import React, { Component } from "react";
import { AppRegistry, Picker } from "react-native";

export default class ButtonSample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  buttonPressed (event) {
    this.setState({count: this.state.count + 1});
    console.log("Button was pressed: ", this.state.text);
  }

  render() {
    return (
      <Button
        onPress={this.buttonPressed.bind(this)}
        title={`increment ${this.state.count}`}
        styles={styles.fancyButton}
        accessibilityLabel="Info about the button"
      />
    );
  }
}

const styles = StyleSheet.create({
    fancyButton: {
        borderStyle: "dashed", borderColor: "gray", borderWidth: 1
    },
});