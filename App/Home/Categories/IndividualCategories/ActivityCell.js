import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
//import IndividualScreensTemplate from "./IndividualScreensTemplate";

export default function ActivityCell(props) {
  // id, name

  return (
    <View style={styles.fillParent}>
      <Text
        style={{
          flex: 1,
          fontFamily: "Gill Sans",
          fontSize: 20,
          padding: 10,
          color: props.color,
          backgroundColor: "#fff",
        }}
      >
        {props.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fillParent: {
    width: "85%",
    flex: 1,
  },
  name: {
    flex: 1,
    fontFamily: "Gill Sans",
    fontSize: 20,
    padding: 10,
    color: global.temp,
    backgroundColor: "#fff",
  },
});
