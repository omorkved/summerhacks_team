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

import * as fullData from "./Activities.json";
import { TouchableOpacity } from "react-native-gesture-handler";

export var activities_array = [
  "Go on a walk!",
  "Learn a new skill!",
  "Practice writing!",
  "Watch YouTube!",
];

export class RandomActivityScreen extends Component {
  state = {
    activity: "Click the button to generate a random activity!",
  };

  onPress = () => {
    var randomCategoryNum = Math.floor(Math.random() * Math.floor(5));
    var randomActivityNum;

    if (randomCategoryNum == 0) {
      randomActivityNum = Math.floor(
        Math.random() * Math.floor(fullData.indoors.length)
      );
      this.setState({
        activity: fullData.indoors[randomActivityNum].identifier,
      });
    } else if (randomCategoryNum == 1) {
      randomActivityNum = Math.floor(
        Math.random() * Math.floor(fullData.outdoors.length)
      );
      this.setState({
        activity: fullData.outdoors[randomActivityNum].identifier,
      });
    } else if (randomCategoryNum == 2) {
      randomActivityNum = Math.floor(
        Math.random() * Math.floor(fullData.health.length)
      );
      this.setState({
        activity: fullData.health[randomActivityNum].identifier,
      });
    } else if (randomCategoryNum == 3) {
      randomActivityNum = Math.floor(
        Math.random() * Math.floor(fullData.fun.length)
      );
      this.setState({
        activity: fullData.fun[randomActivityNum].identifier,
      });
    } else if (randomCategoryNum == 4) {
      randomActivityNum = Math.floor(
        Math.random() * Math.floor(fullData.learning.length)
      );
      this.setState({
        activity: fullData.learning[randomActivityNum].identifier,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.largeButton}
          source={require("../../../assets/runningBeagle.png")}
        />
        <Text style={styles.activities_disp}>{this.state.activity}</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Image
            style={styles.smallButton}
            source={require("../../../assets/surpriseMe.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignContent: "center",
  },
  largeButton: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    alignItems: "center",
    margin: 10,
  },
  smallButton: {
    height: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width / 1.2,
    alignSelf: "center",
    marginTop: Dimensions.get("screen").height / 10,
  },
  activities_disp: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "Gill Sans",
    //backgroundColor: "#71bcf9",
    width: Dimensions.get("screen").width / 1.1,
    alignContent: "center",
  },
});
