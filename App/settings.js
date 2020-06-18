import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  //TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";


export default class SettingsScreen extends Component {
  state = {
    buttonOne: "Change User Name",
    buttonTwo: "Change Favorite Color",
    buttonThree: "Change Time Zone",
    buttonFour: "Help"
  };

  onPress = () => {
    this.setState({
      buttonOne:
        "Pressed"
    });
  };

  render() {
    return (

        //Buttons turn translucent when touched
        //TODO link button to changing screen or pop-up window
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}> Settings</Text>
        <TouchableOpacity>
            <Text style={styles.button_disp}>{this.state.buttonOne}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.button_disp}>{this.state.buttonTwo}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.button_disp}>{this.state.buttonThree}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.button_disp}>{this.state.buttonFour}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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

  // "Settings" headings
  heading: {
    fontWeight:"bold",
    fontSize: Dimensions.get("screen").height / 20,
    marginLeft: Dimensions.get("screen").width / 3,
    marginTop: Dimensions.get("screen").height / 15
    //fontFamily: "Calibri",
  },
});