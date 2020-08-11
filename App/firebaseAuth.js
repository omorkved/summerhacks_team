import * as firebase from 'firebase';
//import * as firebaseui from 'firebaseui';

import {app, fauth} from './firebase.config.js';

//export var authUI = new firebaseui.auth.AuthUI(fauth);
firebase.auth().useDeviceLanguage();
/* Determine which kinds of auth to allow. We choose accounts kids have access to */
export var phoneProvider = firebase.auth.PhoneAuthProvider();
export var authConfig = {
    //signInFlow: 'popup',
    signInOptions: [
		    firebase.auth.EmailAuthProvider.PROVIDER_ID,
		    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		    ],}