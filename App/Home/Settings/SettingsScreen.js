import React, { Component, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
  Alert,
  Switch,
  View,
  Image,
} from "react-native";

import { Container, Header, Content, DatePicker } from "native-base";

//TODO Remove "default" upon pull to master
export default class SettingsScreen extends Component {
  //TO DO: When pressed, this should CHANGE INTERNAL SETTINGS
  //       so that certain features across the app are their favorite color
  myColorAlert = () =>
    Alert.alert(
      "Change Favorite Color",
      "Select One",
      [
        {
          //TODO: change internal color var in onPress
          text: "Purple",
          onPress: () => console.log("Purple pressed"),
        },
        {
          //TODO: change internal color var in onPress
          text: "Blue",
          onPress: () => console.log("Blue pressed"),
        },
        {
          //TODO: change internal color var in onPress
          text: "Green",
          onPress: () => console.log("Green pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );

  state = {
    buttonOne: "Change User Name",
    buttonFive: "Change Birth Date",
    buttonTwo: "Change Favorite Color",
    buttonThree: "Change Time Zone",
    buttonFour: "Help",
  };

  render() {
    return (
      //Buttons turn translucent when touched
      //TODO link button to changing screen or pop-up window

      // onPress={createThreeButtonAlert}
      <SafeAreaView style={settingsStyles.container}>
        <View style={settingsStyles.profileImage}>
          <Image
            source={require("../assets/stockProfile.png")}
            style={settingsStyles.image}
            resizeMode="center"
          ></Image>
        </View>

        <View style={settingsStyles.infoContainer}>
          <Text
            style={[settingsStyles.text, { fontWeight: "200", fontSize: 36 }]}
          >
            Julie
          </Text>
          <Text
            style={[settingsStyles.text, { color: "#AEB5BC", fontSize: 14 }]}
          >
            @julielastname
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={settingsStyles.buttons}>{this.state.buttonOne}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={settingsStyles.buttons}>{this.state.buttonFive}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={settingsStyles.buttons} onPress={this.myColorAlert}>
            {this.state.buttonTwo}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={settingsStyles.buttons}>{this.state.buttonThree}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={settingsStyles.buttons}>{this.state.buttonFour}</Text>
        </TouchableOpacity>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={this.toggleSwitch}
          value={this.isEnabled}
        />
      </SafeAreaView>
      //TODO: Switch currently does nothing.
      // make toggleSwitch function
    );
  }
}
//font is overall font for entire app - is declared on each .js file
const font = "Gill Sans";

const settingsStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  text: {
    fontWeight: "bold",
    fontFamily: font,
    color: "#52575D",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  buttons: {
    height: Dimensions.get("screen").height / 18,
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: "yellowgreen",
    borderRadius: 12,
    color: "white",
    fontFamily: font,
    fontSize: 24,
    overflow: "hidden",
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  // "Settings" headings
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
