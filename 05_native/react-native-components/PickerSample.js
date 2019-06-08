import React, { Component } from "react";
import { AppRegistry, Picker } from "react-native";

export default class PickerSample extends Component {
  constructor(props) {
    super(props);
    this.state = { framework: "React" };
  }

  selectionChanged (value, index) {
    this.setState({framework: value});
    console.log("Button was pressed: ", this.state.framwork);
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.framework}
        style={style.picker}
        onValueChange={this.selectionChanged.bind(this, value, index)}>
        <Picker.Item label="React" value="react" />
        <Picker.Item label="Vue" value="vue" />
        <Picker.Item label="Angular" value="angular" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
    picker: {
      height: 50, width: 100
    },
});