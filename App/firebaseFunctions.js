import * as firebase from 'firebase';

// Access to firebase database is initialized in config file (secret)
import { fdb } from './firebase.config.js';

// TO DO: Write a function to determine userId (need to set up authentication first)
export const userId = "test2";

export function addTask(userId, activityId) {
    // "set" writes new data
  fdb.ref('users/' + userId).set({
    lastAdded: activityId
  },
      // error handling from Realtime Database docs
  function(error) {
	  if (error) {
	      console.log("ERR: Unable to store in database");
	      // Do something here so that app continues to function
	  } else {
	      console.log("SUCCESS: Stored in Busy Beagle databse");
	  }
      }
);

  console.log("Great, the firebase function ran!");
  console.log(userId)
  return
};
