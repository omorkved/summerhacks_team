import React from "react";
import {
    StyleSheet,
	View,
	Text,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	KeyboardAvoidingView,
	ActivityIndicator,
	TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions
	} from "react-native";
import "firebase/firestore";
import firebase from "firebase";
import homeStyles from "./HomeScreen.js"

class AuthScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  }

	state = { email: '', password: '', errorMessage: '', loading: false };
	onLoginSuccess() {
	    this.props.navigation.navigate('Home');
	}
	onLoginFailure(errorMessage) {
	    this.setState({ error: errorMessage, loading: false });
	}
	renderLoading() {
	    if (this.state.loading) {
		return (
        <View>
	<ActivityIndicator size={'large'} />
        </View>
			);
	    }
	}
	async signInWithEmail() {
    await firebase
	.auth()
	.signInWithEmailAndPassword(this.state.email, this.state.password)
	.then(this.onLoginSuccess.bind(this))
	.catch(error => {
		let errorCode = error.code;
		let errorMessage = error.message;
		if (errorCode == 'auth/weak-password') {
		    this.onLoginFailure.bind(this)('Weak Password!');
		} else {
		    this.onLoginFailure.bind(this)(errorMessage);
		}
	    });
	}

	render() {
	    return (
      <TouchableWithoutFeedback
      onPress={() => {
			    Keyboard.dismiss();
			}}
      >
      <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
          source={require("../assets/title.jpeg")}
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height / 6,
            alignSelf: "center",
          }}
        />
      <View style={styles.form}>
              <TextInput
      style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
              />
              <TextInput
      style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#B1B1B1"
                returnKeyType="done"
                textContentType="newPassword"
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
              />
            </View>
      {this.renderLoading()}
            <Text
      style={{
	      fontSize: 18,
	      textAlign: "center",
	      color: "red",
	      width: "80%"
	  }}
            >
		{this.state.error}
            </Text>
            
      <TouchableOpacity style={styles.button}
        
        onPress={() => this.signInWithEmail()}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
              <Text
      style={{ fontWeight: "200", fontSize: 17, textAlign: "center" }}
      onPress={() => {
	      this.props.navigation.navigate("SignUp");
	  }}
              >
                Don't have an Account? Click Here
              </Text>
            </View>
          </KeyboardAvoidingView>
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "86%",
    marginTop: 5
  },
  logo: {
    marginTop: 20
  },
  input: {
    fontSize: 20,
    borderColor: "#707070",
    borderBottomWidth: 1,
    paddingBottom: 1.5,
    marginTop: 25.5
  },
  button: {
    backgroundColor: "#ffd699",
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width / 4,
  },
});

export default AuthScreen;