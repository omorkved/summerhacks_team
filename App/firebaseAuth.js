//var firebase = require('firebase');
//var firebaseui = require('firebaseui');

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import app from './firebase.config.js';

export var authUI = new firebaseui.auth.AuthUI(firebase.auth());

/* Determine which kinds of auth to allow. We choose accounts kids have access to */

export var authConfig = {
    signInFlow: 'popup',
    signInOptions: [
		    firebase.auth.EmailAuthProvider.PROVIDER_ID,
		    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		    ],}