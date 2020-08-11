import React, {useRef, useState} from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
//import * as firebase from 'firebase';

import { mainBeagle } from "../assets/mainBeagle.png";
// Reference: https://firebase.google.com/docs/auth/web/firebaseui
//import { phoneProvider } from "../firebaseAuth.js";
import firebase, { firebaseConfig, fauth, authauth} from "../firebase.config.js";
//authUI.start('#firebaseui-auth-container', authConfig);

export default function HomeScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [codeSentToPhone, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const sendVerification = () => { 
	const phoneProvider = new authauth.PhoneAuthProvider();
	console.log("Sending verification to phone", phoneNumber);
	try {
	    phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current).then(setVerificationId);
	} catch (err) {
	    console.log("PHONE VERIFICATION ERR:");
	    console.log(err);
	} 
	console.log("Verification sent. Verification ID is:");
	// obviously delete after debug
	console.log(verificationId);
};
    const confirmCode = () => {
	console.log("Confirming code...");
	const credential = authauth.PhoneAuthProvider.credential(verificationId, codeSentToPhone);
	fauth.signInWithCredential(credential).then((result) => {
		// Do something with the results here
		console.log(result);
	    });
};
  return (
    <SafeAreaView style={homeStyles.container}>
      <View>
        <Image
          source={require("../assets/title.jpeg")}
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height / 6,
            alignSelf: "center",
            marginTop: 10,
            //marginBottom: 10,
          }}
        />
	  { /*<div id="firebaseui-auth-container" style={{ alignSelf: "center" }}></div>*/}

    <View style={{ alignSelf: "center", }} >
    <FirebaseRecaptchaVerifierModal style={{ alignSelf: "center", }}
    ref={ recaptchaVerifier }
    firebaseConfig={ firebaseConfig } />
    <TextInput style={{ alignSelf: "center", }}
      placeholder="Enter Phone Number:"
    onChangeText={setPhoneNumber}
      keyboardType="phone-pad"
      autoCompleteType="tel"
    />
    <TouchableOpacity style={{ alignSelf: "center", }} onPress={sendVerification}>
      <Text>Send Verification</Text>
    </TouchableOpacity>
    <TextInput style={{ alignSelf: "center", }}
      placeholder="Confirmation Code"
    onChangeText={setCode}
      keyboardType="number-pad"
    />
    <TouchableOpacity onPress={confirmCode} style={{ alignSelf: "center", }}>
      <Text>Confirm Verification Code</Text>
    </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            source={require("../assets/getStarted.jpeg")}
            style={homeStyles.buttons}
          ></Image>
        </TouchableOpacity>
    </View>
<Image
    source={require("../assets/mainImage.png")}
    style={{
            width: Dimensions.get("screen").width / 1.1,
            height: Dimensions.get("screen").height / 3,
            alignSelf: "center",
            marginTop: 0,
            marginBottom: 40,
	}}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
          <Image
            source={require("../assets/Progress.jpeg")}
            style={homeStyles.buttons}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/myProfile.jpeg")}
            style={homeStyles.buttons}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const font = "Gill Sans";

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    top: Dimensions.get("screen").height / 50,
    textAlign: "center",
    fontFamily: font,
    fontSize: Dimensions.get("screen").height / 20,
    marginTop: 20,
    marginBottom: Dimensions.get("screen").height / 25,
  },
  buttons: {
    height: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width / 1.5,
    overflow: "hidden",
    padding: 5,
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
  },
});
