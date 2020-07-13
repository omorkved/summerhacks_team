import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Platform,
  StatusBar,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import fullData from "./Activities.json";
import ActivityCell from "./ActivityCell";

export default class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = { navigator: props.navigation, show: false };
    this.goToDetailed = this.goToDetailed.bind(this);
  }

  render(props) {
    return (
      <SafeAreaView style={practiceStyles.container}>
        <FlatList
          data={fullData.indoors}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={practiceStyles.gridCell}
              onPress={() => {
                this.setState({ show: true });
                global.itemName = item.identifier;
                global.itemDescription = item.description;
              }}
            >
              <ActivityCell id={item.id} name={item.identifier} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={1}
          style={practiceStyles.grid}
        ></FlatList>
        <Modal transparent={true} visible={this.state.show}>
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 100,
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 20,
                padding: 10,
                borderRadius: 10,
                flex: 1,
              }}
            >
              <Text style={practiceStyles.heading}>{global.itemName}</Text>
              <Image
                style={{
                  height: Dimensions.get("screen").height / 4.3,
                  width: Dimensions.get("screen").width / 2,
                  alignSelf: "center",
                  margin: 20,
                }}
                source={{
                  uri: "https://image.flaticon.com/icons/png/512/10/10869.png",
                }}
              ></Image>
              <Text style={practiceStyles.text}>{global.itemDescription}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: false });
                }}
              >
                <Text style={practiceStyles.decisions}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: false });
                }}
              >
                <Text style={practiceStyles.decisions}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  goToDetailed(index) {
    this.state.navigator.navigate("details", null);
  }
}

const practiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  activityButtons: {
    elevation: 8,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
    height: Dimensions.get("screen").height / 18,
  },
  heading: {
    alignSelf: "center",
    fontFamily: "Gill Sans",
    color: "#52575D",
    fontSize: 30,
    padding: 10,
  },
  title: {
    fontFamily: "Gill Sans",
    color: "#000",
    textAlignVertical: "center",
    fontSize: Dimensions.get("screen").height / 18 - 25,
  },
  text: {
    fontFamily: "Gill Sans",
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  decisions: {
    height: Dimensions.get("screen").height / 20,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 20,
    overflow: "hidden",
    padding: 10,
    margin: 10,
    textAlign: "center",
  },
  grid: {
    width: "100%",
  },
  gridCell: {
    backgroundColor: "#fff",
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    width: Dimensions.get("screen").width / 1.15,
    height: Dimensions.get("screen").height / 10,
    borderWidth: 1,
    borderColor: "#057ba6",
  },
});
