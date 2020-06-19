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