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
} from "react-native";

//TODO Remove "default" upon pull to master
export default class SettingsScreen extends Component {

//TO DO: When pressed, this should CHANGE INTERNAL SETTINGS
//       so that certain features across the app are their favorite color
myColorAlert = () =>
  Alert.alert(
    "Change Favorite Color",
    "Select One",
    [
        {   //TODO: change internal color var in onPress
            text: "Purple",
            onPress: () => console.log("Purple pressed")
        },
        {   //TODO: change internal color var in onPress
            text: "Blue",
            onPress: () => console.log("Blue pressed"),
        },
        {   //TODO: change internal color var in onPress
            text: "Green", 
            onPress: () => console.log("Green pressed") 
        },
        {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
        style: "cancel"
        },
    ],
    { cancelable: true }
  );


  state = {
    buttonOne: "Change User Name",
    buttonTwo: "Change Favorite Color",
    buttonThree: "Change Time Zone",
    buttonFour: "Help"
  };

  render() {
    return (

        //Buttons turn translucent when touched
        //TODO link button to changing screen or pop-up window

        // onPress={createThreeButtonAlert}
      <SafeAreaView style={settingsStyles.container}>
        <Text style={settingsStyles.heading}> Settings</Text>
        <TouchableOpacity>
            <Text style={settingsStyles.button_disp}>{this.state.buttonOne}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={settingsStyles.button_disp} onPress={this.myColorAlert}>{this.state.buttonTwo}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={settingsStyles.button_disp}>{this.state.buttonThree}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={settingsStyles.button_disp}>{this.state.buttonFour}</Text>
        </TouchableOpacity>


        <Switch style={settingsStyles.switch_disp}
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

const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignContent: "center",
    marginBottom: Dimensions.get("screen").height / 5,
    justifyContent: "space-evenly"
  },
  button_disp: {
    textAlign: "center",
    fontWeight: "bold",

    //font sizing should be based off screens, not an absolute number
    fontSize: Dimensions.get("screen").height / 40,
    backgroundColor: "gray",

    //I think this is a good width since there is only one column
    // of buttons
    width: Dimensions.get("screen").width / 3,

    //Left margin IS needed
    marginLeft: Dimensions.get("screen").width / 3,

    //Top margin NOT needed due to even spacing with justifyContent
    //marginTop: Dimensions.get("screen").height / 12,
  },
  switch_disp:{
    marginLeft: Dimensions.get("screen").width / 3,

  },
  // "Settings" headings
  heading: {
    fontWeight:"bold",
    fontSize: Dimensions.get("screen").height / 20,
    marginLeft: Dimensions.get("screen").width / 3,
    marginTop: Dimensions.get("screen").height / 15
    //fontFamily: "Calibri",
  },
});


