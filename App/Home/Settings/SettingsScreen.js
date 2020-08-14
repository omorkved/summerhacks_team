import React, { Component } from "react";
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
  TouchableOpacityBase,
} from "react-native";

import { Container, Header, Content, DatePicker } from "native-base";

//TODO Remove "default" upon pull to master
export default class SettingsScreen extends Component {
  //TO DO: When pressed, this should CHANGE INTERNAL SETTINGS
  //       so that certain features across the app are their favorite color
  constructor() {
    super();
    this.myColorAlert = this.myColorAlert.bind(this);
    this.colors = [
      "#00BFFF",
      "#FF1493",
      "#00CED1",
      "#228B22",
      "#e1ad01",
      "#FF4500",
    ];

    this.state = {
      buttonOne: "Change User Name",
      buttonFive: "Change Birth Date",
      buttonTwo: "Change Favorite Color",
      buttonThree: "Change Time Zone",
      buttonFour: "Help",
      username: "Name",
      color: "yellowgreen",
      //text: "",

      //favColor: "yellowgreen",
    };
  }

  myColorAlert = () =>
    Alert.alert(
      "Change Favorite Color",
      "Select One",
      [
        {
          //TODO: change internal color var in onPress
          text: "Purple",
          onPress: () => {
            this.color = "purple";
            console.log(this.color);
          },
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

  renderColors = () => {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {this.colors.map((prop, key) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  color: this.colors[key],
                });
              }}
              key={key}
              style={[settingsStyles.btnColor, { backgroundColor: prop }]}
            ></TouchableOpacity>
          );
        })}
      </View>
    );
  };

  handleEmail = (text) => {
    this.setState({ username: text });
  };

  render() {
    return (
      //Buttons turn translucent when touched
      //TODO link button to changing screen or pop-up window

      // onPress={createThreeButtonAlert}
      <SafeAreaView style={settingsStyles.container}>
        <View style={settingsStyles.profileImage}>
          <Image
            source={require("../../assets/eatingBeagle.png")}
            style={settingsStyles.image}
            resizeMode="center"
          ></Image>
        </View>

        <View style={settingsStyles.infoContainer}>
          <Text
            style={{
              color: this.state.color,
              fontSize: 40,
              fontFamily: "Gill Sans",
            }}
          >
            {this.state.username}
          </Text>
          <Text
            style={[
              settingsStyles.userText,
              { color: "#AEB5BC", fontSize: 16 },
            ]}
          >
            @{this.state.username.toLowerCase()}
          </Text>
        </View>

        <Text style={settingsStyles.text}>Change Username Here:</Text>
        <TextInput
          style={{
            margin: 15,
            height: 40,
            borderColor: this.state.color,
            borderWidth: 1,
            width: Dimensions.get("screen").width / 1.1,
          }}
          underlineColorAndroid="transparent"
          placeholder="Type Here"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        {/* <TouchableOpacity>
          <Text
            style={{
              height: Dimensions.get("screen").height / 18,
              width: Dimensions.get("screen").width / 1.1,
              backgroundColor: this.favColor,
              borderRadius: 12,
              color: "white",
              fontFamily: font,
              fontSize: 24,
              overflow: "hidden",
              margin: 5,
              padding: 5,
            }}
          >
            {this.state.buttonFive}
          </Text>
        </TouchableOpacity> */}
        <Text style={settingsStyles.text}>Choose Your Favorite Color:</Text>
        <View>{this.renderColors()}</View>

        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={this.toggleSwitch}
          value={this.isEnabled}
        /> */}
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
  textInput: {
    height: 40,
    //borderColor: this.state.color,
    borderWidth: 1,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  userText: {
    fontWeight: "bold",
    fontFamily: font,
    color: "#52575D",
    fontSize: 20,
  },
  text: {
    fontWeight: "normal",
    fontFamily: font,
    color: "#52575D",
    fontSize: 20,
    alignSelf: "flex-start",
    margin: 5,
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
    //borderRadius: 100,
    //overflow: "hidden",
  },
  image: {
    flex: 1,
    alignSelf: "center",
    height: Dimensions.get("screen").height / 5,
    width: Dimensions.get("screen").width / 1.5,
  },
});
