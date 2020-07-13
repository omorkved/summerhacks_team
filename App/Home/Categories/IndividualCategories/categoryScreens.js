import "react-native-gesture-handler";
import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Accordion,
  Image,
  Modal,
} from "native-base";
import { RandomActivityScreen } from "./RandomActivityScreen";
import { IndoorsScreen } from "./IndoorsScreen";

export function OutdoorsScreen({ navigation }) {
  return (
    <View>
      <Text>OutdoorsScreen</Text>
    </View>
  );
}

export function HealthScreen({ navigation }) {
  return (
    <View>
      <Text>HealthScreen</Text>
    </View>
  );
}

export function FunScreen({ navigation }) {
  return (
    <View>
      <Text>FunScreen</Text>
    </View>
  );
}

export function LearningScreen({ navigation }) {
  return (
    <View>
      <Text>LearningScreen</Text>
    </View>
  );
}

export function RandomScreen({ navigation }) {
  return <RandomActivityScreen />;
}

const font = "Gill Sans";

const categoryScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  text: {
    fontFamily: "Gill Sans",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
