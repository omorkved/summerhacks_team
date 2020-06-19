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
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text style={styles.catbutton}>Testingg Ignore</Text>
      </TouchableOpacity>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
}

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
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen </Text>
      <Text> Olivia this is reserved space for your code;)</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Homepage" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ Settings }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
