import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class ScrollViewSample extends React.Component {
  render() {
    const names = [ "React", "Vue", "Angular", "Ember", "Ionic", "Meteor", "Amplify"];
    return (
      <ScrollView>
        { names.map((name, index) => (
            <View key={index} style={styles.element}>
              <Text>{name}</Text>
            </View>
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  element: {
    height: 60,
    width: 400,
    padding: 4,
    margin: 2,
    borderColor: '#000',
    backgroundColor: 'lime',
    borderWidth: 3
 }
});
