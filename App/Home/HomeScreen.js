import React from "react";

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
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={homeStyles.container}>
      <View>
        <Image
          source={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height / 3,
            uri:
              "https://i2.wp.com/www.danthatscool.com/wp-content/uploads/2016/01/hamsterball.gif",
          }}
        />
        <Text style={homeStyles.header}>App Name Here</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text style={homeStyles.buttons}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={homeStyles.buttons}>Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={homeStyles.buttons}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const font = "Gill Sans";

const homeStyles = StyleSheet.create({
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
    marginBottom: Dimensions.get("screen").height / 10,
  },
  buttons: {
    height: Dimensions.get("screen").height / 18,
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
});
