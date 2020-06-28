import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Container, Header, Content, Accordion } from "native-base";
import { RandomActivityScreen } from "./RandomActivityScreen";

const indoorsArray = [
  {
    title: "FIRST ACTIVITY CHOICE",
    content:
      "hi here is a brief and exciting explanation of what this activity entails. iuhwdihgudfgku fufiugv dbcjs dcshdcjd fvjhgdsfvugsdvu dsvjhd vjhdgvfjudvjdgvkjhdgvkj dfgvjhdgvjdsg sgdc jsd. yay have fun!",
  },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
];

const outdoorsArray = [
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
];

const healthArray = [
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
];

const funArrau = [
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
];

const learningArray = [
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
];

export function IndoorsScreen({ navigation }) {
  return (
    <Container>
      <Content padder>
        <Accordion
          dataArray={indoorsArray}
          headerStyle={{ backgroundColor: "#b7daf8" }}
          contentStyle={{ backgroundColor: "#ddecf8" }}
        />
      </Content>
    </Container>
  );
}

export function OutdoorsScreen({ navigation }) {
  return (
    <Container>
      <Content padder>
        <Accordion
          dataArray={outdoorsArray}
          headerStyle={{ backgroundColor: "#b9f8c4" }}
          contentStyle={{ backgroundColor: "#dff8dd" }}
        />
      </Content>
    </Container>
  );
}
export function HealthScreen({ navigation }) {
  return (
    <Container>
      <Content padder>
        <Accordion
          dataArray={healthArray}
          headerStyle={{ backgroundColor: "#f48b8b" }}
          contentStyle={{ backgroundColor: "#f8dddd" }}
        />
      </Content>
    </Container>
  );
}
export function FunScreen({ navigation }) {
  return (
    <Container>
      <Content padder>
        <Accordion
          dataArray={funArrau}
          headerStyle={{ backgroundColor: "#f3ee86" }}
          contentStyle={{ backgroundColor: "#f8f4b9" }}
        />
      </Content>
    </Container>
  );
}
export function LearningScreen({ navigation }) {
  return (
    <Container>
      <Content padder>
        <Accordion
          dataArray={learningArray}
          headerStyle={{ backgroundColor: "#f3b286" }}
          contentStyle={{ backgroundColor: "#ffe0c7" }}
        />
      </Content>
    </Container>
  );
}
export function RandomScreen({ navigation }) {
  return <RandomActivityScreen />;
}

const font = "Gill Sans";

const categoryScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    fontFamily: font,
  },
});
