import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";

export default class ProgressScreen extends Component {

  //TO DO: Let's make this scalable. There should be one general "to do" alert 
  // that can populate based on the TO DO LIST
  // and one general "you did ___ on ___" alert than can populate based on the
  // ACCOMPLISHMENT List
  myDanceAlert = () =>
    Alert.alert(
      "To Do",
      "Challenge Accepted on DATE: Dance to your favorite song.",
      [{ text: "Finished!" }, { text: "Working on it!" }, { text: "Give up!" }]
    );

  myKaraokeAlert = () =>
    Alert.alert(
      "To Do",
      "Challenge Accepted on DATE: Sing the lyrics to your favorite song.",
      [{ text: "Finished!" }, { text: "Working on it!" }, { text: "Give up!" }]
    );

  myRunningAlert = () =>
    Alert.alert("Congratulations!", "You ran for 10 minutes on DATE.", [
      { text: "Yay!" },
    ]);

  myJumpRopeAlert = () =>
    Alert.alert("Congratulations!", "You jump roped for 10 minutes on DATE.", [
      { text: "Yay!" },
    ]);

  render() {
    return (
      <ScrollView style={ProgressStyles.container}>
        <Text style={ProgressStyles.text}>To Do</Text>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image
            style={ProgressStyles.left_image}
            source={{
              uri: "https://media.giphy.com/media/241LfGhONZv5EWosVV/giphy.gif",
            }}
          ></Image>

          <Image
            style={ProgressStyles.right_image}
            source={{
              uri: "https://media.giphy.com/media/uLKUuSJR0cbLO/giphy.gif",
            }}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <TouchableOpacity style={ProgressStyles.button_one}>
            <Text onPress={this.myDanceAlert}>Dance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ProgressStyles.button_two}>
            <Text onPress={this.myKaraokeAlert}>Karaoke</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={ProgressStyles.left_image}
            source={{
              uri: "https://media.giphy.com/media/241LfGhONZv5EWosVV/giphy.gif",
            }}
          ></Image>

          <Image
            style={ProgressStyles.right_image}
            source={{
              uri: "https://media.giphy.com/media/uLKUuSJR0cbLO/giphy.gif",
            }}
          ></Image>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={ProgressStyles.button_one}>
            <Text onPress={this.myDanceAlert}>Dance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ProgressStyles.button_two}>
            <Text onPress={this.myKaraokeAlert}>Karaoke</Text>
          </TouchableOpacity>
        </View>

        <Text style={ProgressStyles.text}>Achievements</Text>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image
            style={ProgressStyles.left_image}
            source={require("./running.png")}
          ></Image>

          <Image
            style={ProgressStyles.right_image}
            source={{
              uri:
                "https://media1.tenor.com/images/3bb1bad99d5521621792b16597cdfebd/tenor.gif?itemid=11769652",
            }}
          ></Image>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={ProgressStyles.button_one}>
            <Text onPress={this.myRunningAlert}>What'd I do?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ProgressStyles.button_two}>
            <Text onPress={this.myJumpRopeAlert}>What'd I do?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// const font = "Gill Sans";

const ProgressStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text: {
    fontWeight: "bold",
    // fontFamily: font,
    color: "#52575D",
    fontWeight: "200",
    fontSize: 32,
    marginLeft: Dimensions.get("screen").width / 25,
    marginTop: Dimensions.get("screen").height / 100,
  },

  left_image: {
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").height / 4,
  },

  right_image: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").height / 4,
    left: Dimensions.get("screen").width / 2,
  },

  button_one: {
    height: Dimensions.get("screen").height / 18,
    width: Dimensions.get("screen").width / 2.5,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 12,
    fontSize: 24,
    backgroundColor: "yellowgreen",
    color: "white",
    // fontFamily: font,
    justifyContent: "center",
    alignItems: "center",
  },

  button_two: {
    height: Dimensions.get("screen").height / 18,
    width: Dimensions.get("screen").width / 2.5,
    marginTop: 10,
    marginLeft: Dimensions.get("screen").width / 12,
    marginBottom: 10,
    borderRadius: 12,
    fontSize: 24,
    backgroundColor: "yellowgreen",
    color: "white",
    // fontFamily: font,
    justifyContent: "center",
    alignItems: "center",
  },
});
