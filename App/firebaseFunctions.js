import * as firebase from 'firebase';

// Access to firebase database is initialized in config file (secret)
import { fdb } from './firebase.config.js';

// TO DO: Write a function to determine userId (need to set up authentication first)
export const userId = "test3";

function errCheck (err) {
      // error handling from Realtime Database docs
    if (err) {
	console.log("ERR: Unable to store in database");
	// Do something here so that app continues to function                                                                           
    } else {
	console.log("SUCCESS: Stored in Busy Beagle databse");
    }
}


export function addTask(userId, activityId) {
    // "set" writes new data
  fdb.ref('users/' + userId).set({
    lastAdded: activityId
  },
      function(error) {
	  if (error) {
	  console.log("ERR: Unable to store in database");
	  // Do something here so that app continues to function
      } else {
	  console.log("SUCCESS: Stored most recently added in Busy Beagle databse");
	  }}
      );

  fdb.ref(userId + '/todos').update({
	  // The brackets tell Firebase to treat activityId as a variable
	  [activityId] : "True",
	      },
      function(error) {
	  if (error) {
	      console.log("ERR: Unable to store in database");
	      // Do something here so that app continues to function
      } else {
	  console.log("SUCCESS: Appended to activity to-do list in Busy Beagle database");
	  }}
);

  console.log("Great, the firebase function ran!");
  console.log(userId)
  return
};
