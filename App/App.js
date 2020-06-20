import * as React from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  Settings,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// From React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Internal
import { CategoriesScreen, categoryStyles } from "./categories";
import {
  HealthScreen,
  FunScreen,
  MusicalScreen,
  OutdoorsScreen,
  LearningScreen,
  RandomScreen,
} from "./categoryScreens";
import SettingsScreen from "./settings";
import { RandomActivityScreen } from "./RandomActivityScreen";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={homeStyles.container}>
      <Text style={{ fontWeight: "bold" }}> SAD HOME SCREEN</Text>
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
        onPress={() => navigation.navigate("Details")}
      />
      {/*<TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text style={homeStyles.catbutton}>Testingg Ignore</Text>
      </TouchableOpacity>*/}
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
}

// DetailsScreen: not used -- can delete?
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Categories again :o"
        onPress={() =>
          Alert.alert("Can you read this?", "this is just meant for testing:)")
        }
      />
    </View>
  );
}

/*
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen </Text>
      <Text> Olivia this is reserved space for your code;)</Text>
    </View>
  );
}*/

/* NAVIGATION */
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* Section A: Home Screen page's stack screens
        ONLY add stack screens reachable directly from home page in Section A. */}

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Homepage" }}
        />
        {/* TO DO-- Change name from "Details" to "Categories" ?*/}
        <Stack.Screen
          name="Details"
          component={CategoriesScreen}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ Settings }}
        />
        {/* End of Section A */}

        {/* Section B: Category Pages's Stack Screens */}
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="health" component={HealthScreen} />
        <Stack.Screen name="fun" component={FunScreen} />
        <Stack.Screen name="music" component={MusicalScreen} />
        <Stack.Screen name="outdoors" component={OutdoorsScreen} />
        <Stack.Screen name="learning" component={LearningScreen} />
        <Stack.Screen name="random" component={RandomActivityScreen} />
        {/* End of Section B */}

        {/* Section C:
        NOTE: Add all other stack screens that are only reach from OTHER pages HERE */}
        <Stack.Screen name="QWERTY" component={RandomActivityScreen} />
        {/* End of Section C */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Also importing style sheets above
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
export default App;
