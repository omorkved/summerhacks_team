import React from "react";

import {
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={homeStyles.container}>
      <Text style={{ fontWeight: "bold" }}> CURRENT HOME SCREEN</Text>
      <Image
        source={{
          width: 375,
          height: 263,
          uri:
            "https://i2.wp.com/www.danthatscool.com/wp-content/uploads/2016/01/hamsterball.gif",
        }}
      />
      <Button
        title="Categories"
        height="300"
        width="50%"
        onPress={() => navigation.navigate("Categories")}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignContent: "center",
    marginBottom: Dimensions.get("screen").height / 5,

    // Adds even vertical spacing between the buttons//icons:
    justifyContent: "space-evenly",
  },
  catbutton: {
    position: "relative",
    width: 180,
    height: 180,
    left: 20,
    top: 80,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
  },
});
