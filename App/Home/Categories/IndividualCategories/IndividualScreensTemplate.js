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
import { addTask, userId, removeTask } from "../../../firebaseFunctions"

function loggingType(someVar) {
  console.log(typeof someVar)
  return
};

export default class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = { navigator: props.navigation, show: false };
    this.goToDetailed = this.goToDetailed.bind(this);
    this.itemName = "Select an activity";
    this.itemDescription= "Select an activity from the above list";

    /* Can pass other params by specifying a variable name
       in the CategoriesScreen file. See https://reactnavigation.org/docs/params for more */
    this.activityType = props.route.params.activityType;


    /* This tells the screen which data to populate with
       TO DO: update this to include all possible options */
    if (this.activityType == "indoors") {
      this.dataFromJSON = fullData.indoors;
      console.log("Indoors Screen");
    } else if (this.activityType == "health") {
      this.dataFromJSON = fullData.health;
    } else {
      console.log("ERROR: Unknown screen!")
      console.log(typeof this.activityType)
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
          data = {this.dataFromJSON}

          renderItem={({ item }) => (
            <TouchableOpacity
              style={practiceStyles.gridCell}
              // Only one activity will be selected at a time, so set its metadata as global values
              onPress={() => {
                this.setState({ show: true });
                // TO DO: Let's change this to not use global vars at some pt -- to avoid
                //        accidental conflicts between variable names
                this.itemName = item.identifier;
                this.itemDescription = item.description;
                this.itemId = item.id;
              }}
            >
              <ActivityCell id={item.id} name={item.identifier} />
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
              paddingVertical: 100,
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 20,
                padding: 10,
                borderRadius: 10,
                flex: 1,
              }}
            >
              {/* The Details Box below the list: */}
              <Text style={practiceStyles.heading}>{this.itemName}</Text>
              <Image
                style={{
                  height: Dimensions.get("screen").height / 4.3,
                  width: Dimensions.get("screen").width / 2,
                  alignSelf: "center",
                  margin: 20,
                }}
                source={{
                  uri: "https://image.flaticon.com/icons/png/512/10/10869.png",
                }}
              ></Image>
              <Text style={practiceStyles.text}>{this.itemDescription}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: false });

                  /* Sends Task to Firebase to record selection
                      But first checks if an activity with valid Id has been selected */
                  if (typeof this.itemId !== 'undefined') {
                  addTask(userId, this.itemId);
                  } else {
                    //this line below is just for debugging
                    console.log(this.dataFromJSON)
                  }
                }}
              >
                <Text style={practiceStyles.decisions}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: false });
                  
                  // "No" option: they reject the activity.
                  if (typeof this.itemId !== 'undefined') {
                  removeTask(userId, this.itemId)
                  }

                  // TO DO: Do we want this to auto-select a new activity, instead?
                  this.itemName = "Select a Different Activity"
                  this.itemDescription = "Select a Different Activity from the list above"
                  this.itemId = undefined;
                }}
              >
                <Text style={practiceStyles.decisions}>No</Text>
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
  activityButtons: {
    elevation: 8,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
    height: Dimensions.get("screen").height / 18,
  },
  heading: {
    alignSelf: "center",
    fontFamily: "Gill Sans",
    color: "#52575D",
    fontSize: 30,
    padding: 10,
  },
  title: {
    fontFamily: "Gill Sans",
    color: "#000",
    textAlignVertical: "center",
    fontSize: Dimensions.get("screen").height / 18 - 25,
  },
  text: {
    fontFamily: "Gill Sans",
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  decisions: {
    height: Dimensions.get("screen").height / 20,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 20,
    overflow: "hidden",
    padding: 10,
    margin: 10,
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
    borderColor: "#057ba6",
  },
});
