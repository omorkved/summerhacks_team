import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Platform,
  StatusBar,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";

import * as fullData from "./Activities.json";
import ActivityCell from "./ActivityCell";
import { addTask, removeTask } from "../../../firebaseFunctions";

function loggingType(someVar) {
  console.log(typeof someVar);
  return;
}

export default class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = { navigator: props.navigation, show: false };
    this.goToDetailed = this.goToDetailed.bind(this);
    this.itemName = "Select an activity";
    this.itemDescription = "Select an activity from the above list";

    /* Can pass other params by specifying a variable name
       in the CategoriesScreen file. See https://reactnavigation.org/docs/params for more */
    this.activityType = props.route.params.activityType;
    this.categoryColor;

    /* This tells the screen which data to populate with
       TO DO: update this to include all possible options */
    if (this.activityType == "indoors") {
      this.dataFromJSON = fullData.indoors;
      this.categoryColor = "dodgerblue";
    } else if (this.activityType == "health") {
      this.dataFromJSON = fullData.health;
      this.categoryColor = "tomato";
    } else if (this.activityType == "outdoors") {
      this.dataFromJSON = fullData.outdoors;
      this.categoryColor = "yellowgreen";
    } else if (this.activityType == "fun") {
      this.dataFromJSON = fullData.fun;
      this.categoryColor = "gold";
    } else if (this.activityType == "learning") {
      this.dataFromJSON = fullData.learning;
      this.categoryColor = "sandybrown";
    }
  }
  // TO DO: Activities that the user has already added should not show up, right?
  /* TO DO: Right now, "Yes" adds to a to-do list. We should then navigate to a second set
            of choices that says "do now" or "do later", yeah? */
  render(props) {
    return (
      <SafeAreaView style={practiceStyles.container}>
        <FlatList
          //data={fullData.indoors}
          data={this.dataFromJSON}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                margin: 10,
                flex: 1,
                flexDirection: "column",
                alignSelf: "center",
                width: Dimensions.get("screen").width / 1.15,
                height: Dimensions.get("screen").height / 10,
                borderWidth: 2,
                borderColor: this.categoryColor,
              }}
              //style had to be manually written out ^^ or categoryColor could not be read
              // Only one activity will be selected at a time, so set its metadata as this values
              onPress={() => {
                this.setState({ show: true });
                // TO DO: Let's change this to not use this vars at some pt -- to avoid
                //        accidental conflicts between variable names
                this.itemName = item.identifier;
                this.itemDescription = item.description;
                this.itemId = item.id;
              }}
            >
              <ActivityCell
                id={item.id}
                name={item.identifier}
                color={this.categoryColor}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={1}
          style={practiceStyles.grid}
        ></FlatList>
        <Modal transparent={true} visible={this.state.show}>
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: Dimensions.get("screen").height / 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 10,
                padding: 0,
                borderRadius: 10,
                flex: 1,
              }}
            >
              {/* The Details Box below the list: */}
              <Text style={practiceStyles.heading}>{this.itemName}</Text>
              <Image
                style={{
                  height: Dimensions.get("screen").height / 4.5,
                  width: Dimensions.get("screen").width / 2,
                  alignSelf: "center",
                  margin: 20,
                }}
                source={require("../../../assets/medal.png")}
              ></Image>
              <Text style={practiceStyles.text}>{this.itemDescription}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: false });

                  /* Sends Task to Firebase to record selection
                      But first checks if an activity with valid Id has been selected */
                  if (typeof this.itemId !== "undefined") {
                    addTask(userFirebaseId, this.itemId);
                  } else {
                    //this line below is just for debugging
                    console.log(this.dataFromJSON);
                  }
                }}
              >
                <Text
                  style={{
                    height: Dimensions.get("screen").height / 20,
                    backgroundColor: this.categoryColor,
                    borderRadius: 12,
                    color: "white",
                    fontFamily: "Gill Sans",
                    fontSize: 20,
                    overflow: "hidden",
                    padding: 5,
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: false });

                  // "No" option: they reject the activity.
                  if (typeof this.itemId !== "undefined") {
                    removeTask(userFirebaseId, this.itemId);
                  }

                  // TO DO: Do we want this to auto-select a new activity, instead?
                  this.itemName = "Select a Different Activity";
                  this.itemDescription =
                    "Select a Different Activity from the list above";
                  this.itemId = undefined;
                }}
              >
                <Text
                  style={{
                    height: Dimensions.get("screen").height / 20,
                    backgroundColor: this.categoryColor,
                    borderRadius: 12,
                    color: "white",
                    fontFamily: "Gill Sans",
                    fontSize: 20,
                    overflow: "hidden",
                    padding: 5,
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  goToDetailed(index) {
    this.state.navigator.navigate("details", null);
  }
}

const practiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  heading: {
    alignSelf: "center",
    fontFamily: "Gill Sans",
    color: "#000",
    fontSize: 30,
    padding: 20,
  },

  text: {
    fontFamily: "Gill Sans",
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
  decisions: {
    height: Dimensions.get("screen").height / 25,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 20,
    overflow: "hidden",
    padding: 5,
    margin: 5,
    textAlign: "center",
  },
  grid: {
    width: "100%",
  },
  gridCell: {
    backgroundColor: "#fff",
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    width: Dimensions.get("screen").width / 1.15,
    height: Dimensions.get("screen").height / 10,
    borderWidth: 1,
    borderColor: globalThis.categoryColor,
  },
});
