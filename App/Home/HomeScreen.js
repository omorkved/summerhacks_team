import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";

import { mainBeagle } from "../assets/mainBeagle.png";
import { fauth, fdb } from "../firebase.config";
global.userFirebaseId = "default";

/* Grab the Firebase user uid 
    Note to teammates: refer to Firebase Documentation to learn more */
fauth.onAuthStateChanged((user) => {
  /* refer to https://firebase.google.com/docs/auth/web/start */
  if (user != null) {
    console.log("Firebase account authenticated. ", user.uid, "...");
    global.userFirebaseId = user.uid;
  }
  /* refer to https://firebase.google.com/docs/database/web/read-and-write */
  try {
    fdb.ref(user.uid + '/todos').once('value').then(function(snapshot){
      console.log("... fetching saved activity data.");
      global.activityArray = Object.entries(snapshot.val())
    });
  } catch (err) {
    /* If activityArray is unable to be set above, it will be set in ProgressScreen once user has added some activities.
    Also, activityArray is modified in ProgressScreen when user adds or deletes activities */
    console.log("...Unable to read activity data. (This is not an error if new user) ", err);
  }
  try {
    fdb.ref(user.uid + '/achieved').once('value').then(function(snapshot){
      console.log("... fetching saved achievement data.");
      global.achievedArray = Object.entries(snapshot.val())
    });
  } catch (err) {
    console.log("...Unable to read achievement data.", err);
  }

});

export default function HomeScreen({ navigation }) {
    return (
    <SafeAreaView style={homeStyles.container}>
      <View>
        <Image
          source={require("../assets/title.jpeg")}
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height / 6,
            alignSelf: "center",
            marginTop: 10,
            //marginBottom: 10,
          }}
        />
        <Image
          source={require("../assets/mainImage.png")}
          style={{
            width: Dimensions.get("screen").width / 1.1,
            height: Dimensions.get("screen").height / 3,
            alignSelf: "center",
            marginTop: 0,
            marginBottom: 40,
          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            source={require("../assets/getStarted.jpeg")}
            style={homeStyles.buttons}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
          <Image
            source={require("../assets/Progress.jpeg")}
            style={homeStyles.buttons}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/myProfile.jpeg")}
            style={homeStyles.buttons}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const font = "Gill Sans";

export const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    top: Dimensions.get("screen").height / 50,
    textAlign: "center",
    fontFamily: font,
    fontSize: Dimensions.get("screen").height / 20,
    marginTop: 20,
    marginBottom: Dimensions.get("screen").height / 25,
  },
  buttons: {
    height: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width / 1.5,
    overflow: "hidden",
    padding: 5,
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
  },
});
