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


// Call this function when user decide to un-add a task
export function removeTask(userId, activityId){

    // Two things: add to "lastRemoved" and remove from "todos" list
    // lastRemoved is simply a way for us to internally track recent activity
    // todos list is the actual list of all activityId's that the user wants to do

    fdb.ref('users/' + userId).set({
	    lastRemoved: activityId
	},
	function(error) {
	    if (error) {
		console.log("ERR: Unable to track removal request in database");
		// Do something here so that app continues to function                                                                               
	    } else {
		console.log("SUCCESS: Stored most recently removed in Busy Beagle databse");
	    }}
	);

    fdb.ref(userId + '/todos').update({
	    [activityId] : null,
	},
	function(error) {
	    if (error) {
		console.log("ERR: Unable to remove activity from  database");
		// Do something here so that app continues to function                                                                           
	    } else {
		console.log("SUCCESS: Removed from activity to-do list in Busy Beagle database");
	    }}
	);


return
}
