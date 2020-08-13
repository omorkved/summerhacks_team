import "react-native-gesture-handler";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  Modal,
} from "react-native";
import { fdb, fauth } from "../../firebase.config";
import { achieveTask, removeTask } from "../../firebaseFunctions";

/* Here is an example of how to listen to the database 
  The "userId + /todos" line is because that is how we store
  the info in the firebase realtime database */
var lenToDoList = 0;
var ToDoListener = fdb.ref(userFirebaseId + '/todos');
var AchievedListener = fdb.ref(userFirebaseId + '/achieved');

// The listener runs whenever a change occurs to the databse
ToDoListener.on('value', function(snapshot) {
        if(snapshot){
          updateLen(snapshot.val());
          seeActivityIDs(snapshot.val());
          console.log("To-Do List Listener ran for user: ", userFirebaseId, " in ProgressScreen.js");
        }
});

AchievedListener.on('value', function(snapshot) {
  if(snapshot.val()) global.achievedArray = Object.entries(snapshot.val());
});

function updateLen (valFromDb) {
  // Finds length of ToDo list
  if (valFromDb) lenToDoList = Object.keys(valFromDb).length;
};

function seeActivityIDs(valFromDb) {
  if (valFromDb){
    global.activityArray = Object.entries(valFromDb);
  } else {
    console.log("ERR: seeActivityIDs: Unable to see activity IDs from Firebase in ProgressScreen.js. Length list is", valFromDb);
  }
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
  const [modalVisible, setModalVisible] = useState(false);
  const [actName, setActName] = useState("Activity");
  const [actDesc, setActDesc] = useState("Desc");
  const [actId, setActId] = useState("00");

  try{
    const checkIfExists = activityArray
    return (
      <>
      <View style={{ height: Dimensions.get("screen").height / 3 }}>
      <FlatList
        data={ activityArray }
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                margin: 5,
                flex: 1,
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "center",
                width: Dimensions.get("screen").width / 1.15,
                height: Dimensions.get("screen").height / 10,
                borderWidth: 2,
              }}
              onPress={() => {
                setActName(item[1][0]);
                setActDesc(item[1][1]);
                setActId(item[0]);
                setModalVisible(true);
              }}
              > 
              <View>
                {/*<Text style={ProgressStyles.activityText}>{item.toString().substring(3,)}</Text>*/}
                <Text style={ProgressStyles.activityText}>{item[1][0]}</Text>
                </View>
            </TouchableOpacity>
        )}
        numColumns={1}
        ></FlatList> 
        </View>
      <Modal transparent={true} visible={modalVisible}>
        <View
          style={{
            backgroundColor: "#000000aa",
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: Dimensions.get("screen").height / 15,
          }}>
          <View
          style={{
              backgroundColor: "#ffffff",
              margin: 10,
              padding: 0,
              borderRadius: 10,
              flex: 1,
            }}>
              {/* The Details Box below the list: */}
              <Text style={ProgressStyles.heading}>{actName}</Text>
              <Image
                style={{
                  height: Dimensions.get("screen").height / 4.5,
                  width: Dimensions.get("screen").width / 2,
                  alignSelf: "center",
                  margin: 20,
                }}
                source={require("../../assets/medal.png")}
              ></Image>
              <Text style={ProgressStyles.text}>{actDesc}</Text>
              <TouchableOpacity
                onPress={() => {
                  achieveTask(userFirebaseId, actId, actName, actDesc);
                  setModalVisible(false);
                }}
              >
                <Text style={ProgressStyles.yesOrNoText}>Complete Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={ProgressStyles.yesOrNoText}>Save for Later</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  removeTask(userFirebaseId, actId);
                }}
              >
                <Text style={ProgressStyles.yesOrNoText}>Remove from To-Do list</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={ProgressStyles.titleText}>Achieved</Text>
      <View style={{ height: Dimensions.get("screen").height / 3 }}>
      <FlatList
        data={ achievedArray }
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
                height: Dimensions.get("screen").height / 12,
                borderWidth: 2,
              }}  > 
              <View>
                <Text style={ProgressStyles.activityText}>{item[1][0]}</Text>
                </View>
            </TouchableOpacity>
        )}
        numColumns={1}
        ></FlatList>
        </View>
        </>
    );
    } catch {
    return (
      <Text style={ProgressStyles.yesOrNoText}>The list cannot be loaded right now</Text>
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
  yesOrNoText: {
    height: Dimensions.get("screen").height / 20,
    borderRadius: 12,
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 20,
    overflow: "hidden",
    padding: 5,
    margin: 10,
    textAlign: "center",
    backgroundColor: "yellowgreen",
  },
  heading: {
    alignSelf: "center",
    fontFamily: "Gill Sans",
    color: "#000",
    fontSize: 30,
    padding: 20,
  },
});
