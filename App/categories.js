import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HealthScreen,
  FunScreen,
  MusicalScreen,
  OutdoorsScreen,
  LearningScreen,
  RandomScreen,
} from "./categoryScreens";

export function CategoriesScreen({ navigation }) {
  return (
    <View style={categoryStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("health")}>
        <Text style={categoryStyles.healthButton}>HEALTH</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("fun")}>
        <Text style={categoryStyles.funButton}>FUN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("music")}>
        <Text style={categoryStyles.musicalButton}>MUSIC</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("outdoors")}>
        <Text style={categoryStyles.outdoorsButton}>OUTDOORS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("learning")}>
        <Text style={categoryStyles.learningButton}>LEARNING</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("random")}>
        <Text style={categoryStyles.randomButton}>RANDOM</Text>
      </TouchableOpacity>
    </View>
  );
}

//const Stack = createStackNavigator();

/*function categories() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="health" component={HealthScreen} />
        <Stack.Screen name="fun" component={FunScreen} />
        <Stack.Screen name="music" component={MusicalScreen} />
        <Stack.Screen name="outdoors" component={OutdoorsScreen} />
        <Stack.Screen name="learning" component={LearningScreen} />
        <Stack.Screen name="random" component={RandomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

// TODO: Change these heights so that they relate to screen dimensions, not absolute numbers
/* NOTE: Notice how I changed the name of this style sheet. This is to avoid name collision when
        I import it into App.ks */
const categoryStyles = StyleSheet.create({
  healthButton: {
    position: "absolute",
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
  funButton: {
    position: "absolute",
    width: 180,
    height: 180,
    left: 220,
    top: 80,
    backgroundColor: "gold",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
  },
  musicalButton: {
    position: "absolute",
    width: 180,
    height: 180,
    left: 20,
    top: 280,
    backgroundColor: "tomato",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
  },
  outdoorsButton: {
    position: "absolute",
    width: 180,
    height: 180,
    left: 220,
    top: 280,
    backgroundColor: "yellowgreen",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
  },
  learningButton: {
    position: "absolute",
    width: 180,
    height: 180,
    left: 20,
    top: 480,
    backgroundColor: "sandybrown",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
  },
  randomButton: {
    position: "absolute",
    width: 180,
    height: 180,
    left: 220,
    top: 480,
    backgroundColor: "slateblue",
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
  },
});
//export default App;
