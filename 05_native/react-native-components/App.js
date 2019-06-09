import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInputSample, 
  TextViewSample, ButtonSample, ImageSample, 
  FlatListSample, SliderSample, SectionListSample, 
SwitchSample, ActivityIndicatorSample, PickerSample,
ModalSample, WebViewSample, ScrollViewSample, IconsSample } from "./IndexSamples";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {/*<View>
          <Text style={styles.subtitle}>This is another Text</Text>
          <Text style={styles.paragraph}>This is a subtext</Text>
        </View>
        <View>
          <MaterialIcons name="directions-run" color={"black"} size={42} />
        </View>
        <View>
          <Text>TextView Sample</Text>
          <TextViewSample />
        </View>
        <View>
          <Text>TextInput Sample</Text>
          <TextInputSample />
        </View>
        <View>
          <Text>Button Sample</Text>
          <ButtonSample />
        </View>
        <View>
          <Text>Image Sample</Text>
          <ImageSample />
        </View>
        <View>
          <Text>SwitchSample Sample</Text>
          <SwitchSample />
        </View>
        <View>
          <Text>Slider Sample</Text>
          <SliderSample />
        </View> 
        <View>
          <Text>Modal Sample</Text>
          <ModalSample />
        </View>
        <View>
          <Text>WebView Sample</Text>
          <WebViewSample />
        <View>
          <Text>ScrollView Sample</Text>
          <ScrollViewSample />
        </View> */}
        <View>
          <Text>Icons Sample</Text>
          <IconsSample />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 10,
  },
  paragraph: {
    fontSize: 12
  },
});
