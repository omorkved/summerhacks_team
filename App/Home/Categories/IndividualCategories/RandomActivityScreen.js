import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Platform,
  StatusBar,
  Image,
} from "react-native";

export var activities_array = [
  "Go on a walk!",
  "Learn a new skill!",
  "Practice writing!",
  "Watch YouTube!",
];

export class RandomActivityScreen extends Component {
  state = {
    activity: "Generate a random activity by clicking the image!",
  };

  onPress = () => {
    this.setState({
      activity:
        activities_array[
          Math.floor(Math.random() * 100) % activities_array.length
        ],
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={this.onPress}>
          <Image
            style={styles.gen_button}
            source={{
              uri: "https://picsum.photos/300",
            }}
          />
        </TouchableHighlight>
        <Text style={styles.activities_disp}>{this.state.activity}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  gen_button: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
  },
  activities_disp: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "orange",
    marginLeft: Dimensions.get("screen").width / 4,
    marginTop: Dimensions.get("screen").height / 4,
    marginBottom: Dimensions.get("screen").height / 4,
    width: Dimensions.get("screen").width / 2,
  },
});
