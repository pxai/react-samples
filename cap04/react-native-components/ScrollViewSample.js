import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class ScrollViewSample extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <Text>This is a ScrollView</Text>
	  	<View>
			<Text>Scroll views are nice</Text>
		</View>
	  	<View>
            <Text>This component is awesome</Text>
		</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 10
  },
});
