import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as fullData from "./IndividualCategories/Activities.json";

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={categoryStyles.container}>
      {/*navigation objects include parameters (see documentation on react navigation params) */}
      <TouchableOpacity onPress={() => navigation.navigate("individualCategory", {activityType: "indoors"})}>
        <Text style={categoryStyles.indoorsButton}>Indoors</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("outdoors")}>
        <Text style={categoryStyles.outdoorsButton}>Outdoors</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("individualCategory", {activityType: "health"})}>
        <Text style={categoryStyles.healthButton}>Health</Text>
      </TouchableOpacity>

      {/*To do: change navigation to individualCategory, add param. First need to add some activities to the JSON */}
      <TouchableOpacity onPress={() => navigation.navigate("fun")}>
        <Text style={categoryStyles.funButton}>Fun</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("learning")}>
        <Text style={categoryStyles.learningButton}>Learning</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("random")}>
        <Text style={categoryStyles.randomButton}>Surprise</Text>
      </TouchableOpacity>
    </View>
  );
}

// TODO: Change these heights so that they relate to screen dimensions, not absolute numbers
/* NOTE: Notice how I changed the name of this style sheet. This is to avoid name collision when
        I import it into App.ks */
const font = "Gill Sans";

const categoryStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  indoorsButton: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2.3,
    height: Dimensions.get("screen").width / 2.3,
    left: Dimensions.get("screen").width / 23,
    top: Dimensions.get("screen").height / 20,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    overflow: "hidden",
    padding: 5,
    fontFamily: font,
  },
  outdoorsButton: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2.3,
    height: Dimensions.get("screen").width / 2.3,
    left:
      Dimensions.get("screen").width / 23 +
      Dimensions.get("screen").width / 2.3 +
      Dimensions.get("screen").width / 23,
    top: Dimensions.get("screen").height / 20,
    backgroundColor: "yellowgreen",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontFamily: font,
    overflow: "hidden",
    padding: 5,
  },
  healthButton: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2.3,
    height: Dimensions.get("screen").width / 2.3,
    left: Dimensions.get("screen").width / 23,
    top:
      Dimensions.get("screen").height / 20 +
      Dimensions.get("screen").width / 2.3 +
      Dimensions.get("screen").width / 23,
    backgroundColor: "tomato",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontFamily: font,
    overflow: "hidden",
    padding: 5,
  },
  funButton: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2.3,
    height: Dimensions.get("screen").width / 2.3,
    left:
      Dimensions.get("screen").width / 23 +
      Dimensions.get("screen").width / 2.3 +
      Dimensions.get("screen").width / 23,
    top:
      Dimensions.get("screen").height / 20 +
      Dimensions.get("screen").width / 2.3 +
      Dimensions.get("screen").width / 23,
    backgroundColor: "gold",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontFamily: font,
    overflow: "hidden",
    padding: 5,
  },
  learningButton: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2.3,
    height: Dimensions.get("screen").width / 2.3,
    left: Dimensions.get("screen").width / 23,
    top:
      Dimensions.get("screen").height / 20 +
      (2 * Dimensions.get("screen").width) / 2.3 +
      (2 * Dimensions.get("screen").width) / 23,
    backgroundColor: "sandybrown",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontFamily: font,
    overflow: "hidden",
    padding: 5,
  },
  randomButton: {
    position: "absolute",
    width: Dimensions.get("screen").width / 2.3,
    height: Dimensions.get("screen").width / 2.3,
    left:
      Dimensions.get("screen").width / 23 +
      Dimensions.get("screen").width / 2.3 +
      Dimensions.get("screen").width / 23,
    top:
      Dimensions.get("screen").height / 20 +
      (2 * Dimensions.get("screen").width) / 2.3 +
      (2 * Dimensions.get("screen").width) / 23,
    backgroundColor: "slateblue",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontFamily: font,
    overflow: "hidden",
    padding: 5,
  },
});
//export default App;
