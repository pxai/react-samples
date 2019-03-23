import React, { Component } from 'react';
import { AppRegistry, SectionList } from 'react-native';

export default class SectionListSample extends Component {
  constructor(props) {
    super(props);
    this.state = { users : [{key: "JS"}, {key: "Java"}, {key: "PHP"}] };
  }

  renderListItem (value) {
    return <Text>{value}</Text>
  }

  render() {
    return (
    <SectionList
      renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
      )}
      sections={[
        {title: 'John', data: ['js', 'java', 'perl']},
        {title: 'Mike', data: ['rails', 'ember']},
        {title: 'Joe', data: ['cobol', 'c++']},
      ]}
      keyExtractor={(item, index) => item + index}
    />
    );
  }
}

const styles = StyleSheet.create({
    sectionList: {
      fontSize: "10pt", color: "green" 
    }
});