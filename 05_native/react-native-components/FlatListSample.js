import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";

var width = Dimensions.get('window').width;

export default class FlatListSample extends Component {
  constructor(props) {
    super(props);
    this.state = { elements : [{key: "JS"}, {key: "Java"}, {key: "PHP"}] };
  }

  renderListItem ({item}) {
   return  <View style={styles.item}>
      <Text>{item.key}</Text>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.elements}
        showsVerticalScrollIndicator={true}
        renderItem={this.renderListItem} 
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  item: {
    justifyContent: 'center',
    paddingTop: 30,
    margin: 1,
    borderRadius: 2,
    backgroundColor: 'yellow',
    width: width * .99
  }
});