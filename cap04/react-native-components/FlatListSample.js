import React, { Component } from 'react';
import { AppRegistry, FlatList } from 'react-native';

export default class FlatListSample extends Component {
  constructor(props) {
    super(props);
    this.state = { elements : [{key: "JS"}, {key: "Java"}, {key: "PHP"}] };
  }

  renderListItem (value) {
    return <Text>{value}</Text>
  }

  render() {
    return (
      <FlatList
      data={this.state.elements}
      style={styles.list}
      renderItem={this.renderListItem(item.key)}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
    list: {
      fontSize: "10pt", color: "green" 
    }
});