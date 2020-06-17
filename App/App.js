import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("health")}>
        <Text style={styles.healthButton}>HEALTH</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("fun")}>
        <Text style={styles.funButton}>FUN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("music")}>
        <Text style={styles.musicalButton}>MUSIC</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("outdoors")}>
        <Text style={styles.outdoorsButton}>OUTDOORS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("learning")}>
        <Text style={styles.learningButton}>LEARNING</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("random")}>
        <Text style={styles.randomButton}>RANDOM</Text>
      </TouchableOpacity>
    </View>
  );
}

function HealthScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>health Screen</Text>
      <Button
        title="Put activities here"
        onPress={() => navigation.navigate("health")}
      />
    </View>
  );
}

function FunScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>fun Screen</Text>
      <Button
        title="Put activities here"
        onPress={() => navigation.navigate("fun")}
      />
    </View>
  );
}
function MusicalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>music Screen</Text>
      <Button
        title="Put activities here"
        onPress={() => navigation.navigate("music")}
      />
    </View>
  );
}
function OutdoorsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>outdoors Screen</Text>
      <Button
        title="Put activities here"
        onPress={() => navigation.navigate("outdoors")}
      />
    </View>
  );
}
function LearningScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>learning Screen</Text>
      <Button
        title="Put activities here"
        onPress={() => navigation.navigate("learning")}
      />
    </View>
  );
}
function RandomScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>random Screen</Text>
      <Button
        title="Put activities here"
        onPress={() => navigation.navigate("random")}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
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
}

const styles = StyleSheet.create({
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
export default App;
