import React, { Component } from 'react';
import { AppRegistry, Slider } from 'react-native';

export default class SliderSample extends Component {
  constructor(props) {
    super(props);
    this.state = { speed: 50 };
  }

  slideChanged (value) {
    this.setState({speed: value});
    console.log("Slider was changed: ", this.state.speed);
  }

  render() {
    return (
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={this.state.speed}
        style={style.picker}
        onValueChange={this.slideChanged.bind(this, value)}
        onSlidingComplete={this.slideChanged.bind(this, value)}>
      </Slider>
    );
  }
}

const styles = StyleSheet.create({
    picker: {
      height: 50, width: 100
    },
});