import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function ActivityCell(props) {
  // id, name
  return (
    <View style={styles.fillParent}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 4,
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    resizeMode: "contain",
    padding: 0,
  },
  fillParent: {
    width: "100%",
    flex: 1,
  },
  name: {
    flex: 1,

    fontFamily: "Gill Sans",
    fontSize: 20,
    padding: 10,
    color: "#057ba6",
    backgroundColor: "#fff",
  },
});
