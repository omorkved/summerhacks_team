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
  FlatList,
  SafeAreaView,
} from "react-native";
import { fdb, fauth } from "../../firebase.config";
import ActivityCell from "../Categories/IndividualCategories/ActivityCell";

//import console = require("console");

  /* Here is an example of how to listen to the database 
     The "userId + /todos" line is because that is how I stored
     the info in the firebase realtime database */
var lenToDoList = 0;
var ToDoListener = fdb.ref(userFirebaseId + '/todos');

// Below is the 'listener'. It runs whenever a change occurs to the databse
ToDoListener.on('value', function(snapshot) {
        if(snapshot){
          updateLen(snapshot.val());
          seeActivityIDs(snapshot.val());
          // you could add other things here
          console.log("To-Do List Listener ran for user: ", userFirebaseId, " in ProgressScreen.js");
        }
});

function updateLen (valFromDb) {
  if (valFromDb) lenToDoList = Object.keys(valFromDb).length;
  /* The code below simply finds the length of the todolist,
     which is stored as a dictionary */
};

function seeActivityIDs(valFromDb) {
  if (valFromDb){
    //console.log(Object.keys(valFromDb));
    //console.log("value: ", valFromDb);
    console.log("value: ", Object.entries(valFromDb));
    //global.activityArray = Object.keys(valFromDb);
    global.activityArray = Object.entries(valFromDb);
  } else {
    console.log("ERR: seeActivityIDs: Unable to see activity IDs from Firebase in ProgressScreen.js. Length list is", valFromDb);
  }
  // TO DO: Instead of just logging to console, this should be shown to user
}

/* Here is another example for the most recently added.
   Right now our db only tracks the one most recent, but perhaps
   we could store with timestamps so that we can grab the 5-10 most 
   recently added items, or whatever */
var mostRecentListener = fdb.ref('users/' + userFirebaseId + '/lastAdded');
mostRecentListener.on('value', function(snapshot) {
  if (snapshot) console.log("Most Recently Added Activity: ", snapshot.val());
});

function OurToDoList(){
  try{
    const checkIfExists = activityArray
    return (
      <FlatList
        data={activityArray }
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                margin: 10,
                flex: 1,
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "center",
                width: Dimensions.get("screen").width / 1.15,
                height: Dimensions.get("screen").height / 10,
                borderWidth: 2,
              }}  > 
              <View>
                <Text style={ProgressStyles.activityText}>{item.toString().substring(3,)}</Text>
                </View>
            </TouchableOpacity>
        )}
        numColumns={1}
        
        ></FlatList>
    );
  } catch {
    return (
      <Text>The To-Do list cannot be loaded right now</Text>
    );
  }
}

function OurAchievedList(){
  try{
    const checkIfExists = achievedArray
    return (
      <FlatList
        data={activityArray }
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                margin: 10,
                flex: 1,
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "center",
                width: Dimensions.get("screen").width / 1.15,
                height: Dimensions.get("screen").height / 15,
                borderWidth: 2,
              }}  > 
              <View>
                <Text style={ProgressStyles.activityText}>{item.toString().substring(3,)}</Text>
                </View>
            </TouchableOpacity>
        )}
        numColumns={1}
        
        ></FlatList>
    );
  } catch {
    return (
      <Text>The Achieved list cannot be loaded right now</Text>
    );
  }
}

export default class ProgressScreen extends Component {
  myDanceAlert = () =>
    Alert.alert(
      "To Do",
      "Challenge Accepted on DATE: Dance to your favorite song.",
      [{ text: "Finished!" }, { text: "Working on it!" }, { text: "Give up!" }]
    );
  render(props) {
    return (
      <SafeAreaView style={ProgressStyles.container}>
        { /* Here is an example of how to use the listener */ }
        <Text style={ProgressStyles.banner}>You have { lenToDoList } tasks in your to-do list!</Text>
        <Text style={ProgressStyles.titleText}>To Do</Text>
        <OurToDoList/>
        <Text style={ProgressStyles.titleText}>Achieved</Text>
        <OurAchievedList/>
        </SafeAreaView>
    );}
}

const ProgressStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  titleText: {
    fontWeight: "bold",
    color: "#52575D",
    fontWeight: "200",
    fontSize: 32,
    marginLeft: Dimensions.get("screen").width / 25,
    marginTop: Dimensions.get("screen").height / 100,
  },
  activityText: {
    fontWeight: "bold",
    color: "#52575D",
    fontWeight: "300",
    fontSize: 22,
    
  },

  banner: {
    height: Dimensions.get("screen").height / 18,
    width: Dimensions.get("screen").width,
    borderRadius: 12,
    fontSize: 20,
    backgroundColor: "yellowgreen",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
