import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HealthScreen({ navigation }) {
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
