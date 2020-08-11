import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Dimensions
} from 'react-native';
import 'firebase/firestore';
import firebase from 'firebase';
import homeStyles from "./HomeScreen.js"
import { Button } from 'native-base';

/* With help from this tutorial: 
https://medium.com/@denisceric94/expo-and-firebase-authentication-email-password-facebook-and-google-681a511c61b6 
*/

class SignUpScreen extends React.Component {
  state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
        {/* </TouchableWithoutFeedback><SafeAreaView style={{ flex: 1 }}> */}
        {/* </SafeAreaView><KeyboardAvoidingView style={styles.container} behavior="padding"> */}
      <SafeAreaView>
      <KeyboardAvoidingView style={homeStyles.container}>
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
          <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                textContentType="name"
                value={this.state.displayName}
                onChangeText={displayName => this.setState({ displayName })}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
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
                textAlign: 'center',
                color: 'red',
                width: '80%'
              }}
            >
              {this.state.error}
            </Text>
            <Button
              style={{ width: '50%', marginTop: 10, alignSelf: 'center' }}
              title="Click to Sign Up"
              onPress={() => this.signInWithEmail()}
              color="#841584"
            />
            {/*    <Text>Sign Up</Text> */}
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ fontWeight: '200', fontSize: 17, textAlign: 'center' , marginBottom: 10}}
                onPress={() => {
                  this.props.navigation.navigate('AuthScreen');
                }}
              >
                Already have an account? Click Here
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
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '86%',
    marginTop: 15
  },
  logo: {
    marginTop: 20
  },
  input: {
    fontSize: 20,
    borderColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 1.5,
    marginTop: 25.5,
  },
  button: {
    backgroundColor: '#3A559F',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22
  },
});
export default SignUpScreen;