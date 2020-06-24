import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button } from "react-native";

import { RandomActivityScreen } from "./RandomActivityScreen";

export function HealthScreen({ navigation }) {
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

export function FunScreen({ navigation }) {
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
export function MusicalScreen({ navigation }) {
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
export function OutdoorsScreen({ navigation }) {
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
export function LearningScreen({ navigation }) {
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
export function RandomScreen({ navigation }) {
  return (
    <RandomActivityScreen />
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>random Screen</Text>
    //   <Button
    //     title="Put activities here"
    //     onPress={() => navigation.navigate("QWERTY")}
    //   />
    // </View>
  );
}
