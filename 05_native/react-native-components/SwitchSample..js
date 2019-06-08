import React, { Component } from "react";
import { AppRegistry, Switch } from "react-native";

export default class SwitchSample extends Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
  }

  switchChanged (value, index) {
    this.setState({framework: value});
    console.log("Button was pressed: ", this.state.framwork);
  }

  render() {
    return (
      <Switch
        value={this.state.enabled}
        style={this.state.enabled ? style.ok : style.nope}
        onValueChange={this.selectionChanged.bind(this, value, index)}>
        trackColor={green}
      </Switch>
    );
  }
}

const styles = StyleSheet.create({
    ok: {
      color: green
    },
    nope: {
      color: red
    }
});