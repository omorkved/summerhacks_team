import React from "react";

// From React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Internal
import HomeScreen from "./Home/HomeScreen";
import SettingsScreen from "./Home/Settings/SettingsScreen";
import CategoriesScreen from "./Home/Categories/IndividualCategories/CategoriesScreen";
import ProgressScreen from "./Home/Progress/ProgressScreen";

//import IndoorsScreen from "./Home/Categories/IndividualCategories/IndoorsScreen";
import IndividualScreensTemplate from "./Home/Categories/IndividualCategories/IndividualScreensTemplate";
import { RandomActivityScreen } from "./Home/Categories/IndividualCategories/RandomActivityScreen";

/* DEBUG */
console.ignoredYellowBox = ['Setting a timer'];

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
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{ title: "Progress" }}
        />
        <Stack.Screen
          name="Profile"
          component={SettingsScreen}
          options={{ title: "Profile" }}
        />

        {/* End of Section A */}

        {/* Section B: Category Pages's Stack Screens */}
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen
          name="individualCategory"
          component={IndividualScreensTemplate}
        />
        <Stack.Screen name="random" component={RandomActivityScreen} />
        {/*  Changed to one generic template that takes in activityType as a parameter in Categories Screen file
        <Stack.Screen name="outdoors" component={OutdoorsScreen} />
        <Stack.Screen name="health" component={HealthScreen} />
        <Stack.Screen name="fun" component={FunScreen} />
        <Stack.Screen name="learning" component={LearningScreen} />
        <Stack.Screen name="random" component={RandomScreen} />
        <Stack.Screen name="indoors" component={IndoorsScreen} />
	 */}
        {/* End of Section B */}

        {/* Section C:
        NOTE: Add all other stack screens that are only reach from OTHER pages HERE */}
        {/* End of Section C */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
