import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class TextViewSample extends React.Component {
    constructor(props) {
        super(props);
    }

    message() {
        return "This is important text";
    }

  render() {
    return (
      <ScrollView style={styles.scrollview}>
	  	<View>
			<Text style={styles.title}>Text components</Text>
		</View>
	  	<View>
            <Text>Text can have nested text like this
                <Text>{this.messge()}</Text>
                And it's awesome.
            </Text>
		</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Verdana',
    fontSize: 14
  },
});
