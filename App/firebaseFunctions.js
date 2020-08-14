import * as firebase from 'firebase';

// Access to firebase database is initialized in config file (secret)
import { fdb } from './firebase.config.js';

// Recall that userFirebaseId is set during Sign in or Sign up

export function addTask(userFirebaseId, activityId, activityName, activityDesc) {
	// Record "most recently added" activity
	if (userFirebaseId){
  	fdb.ref('users/' + userFirebaseId).set({
    	lastAdded: activityId
  	}, function(error) {
	  if (error) {
	  	console.log("ERR: Unable to store in database");
      	} else {
	  console.log("SUCCESS: Stored most recently added in Busy Beagle databse");
	  }}
    );

  	fdb.ref(userFirebaseId + '/todos').update({
	  // The brackets tell Firebase to treat activityId as a variable
	  [activityId] : [activityName, activityDesc],
	      },
      function(error) {
	  if (error) {
	      console.log("ERR: Unable to store in database");
	      // Do something here so that app continues to function
      } else {
	  console.log("SUCCESS: Appended ", activityName, " to to-do list in Busy Beagle database");
	  }}
	);
	} else {
		console.log("ERR: Authenticaton did not work. userFirebaseId is null");
	}

  fdb.ref(userFirebaseId + '/todos').once('value').then(function(snapshot){
                if (snapshot.val()) global.activityArray = Object.entries(snapshot.val())
					});
  console.log("Firebase function addTask ran for user: ", userFirebaseId);
  return
};


// Call this function when user decide to un-add a task
export function removeTask(userFirebaseId, activityId){

	if(userFirebaseId) {
    // Two things: add to "lastRemoved" and remove from "todos" list
    // lastRemoved is simply a way for us to internally track recent activity
    // todos list is the actual list of all activityId's that the user wants to do

    	fdb.ref('users/' + userFirebaseId).set({
	    	lastRemoved: activityId
		}, function(error) {
	    	if (error) {
				console.log("ERR: Unable to track removal request in database");                                                                             
	    	} else {
				console.log("SUCCESS: Stored most recently removed in Busy Beagle database");
	    	}}
		);

    	fdb.ref(userFirebaseId + '/todos').update({
	    	[activityId] : null,
		}, function(error) {
	    if (error) {
			console.log("ERR: Unable to remove activity from  database");
	    } else {
			console.log("SUCCESS: Removed from activity to-do list in Busy Beagle database");
	    }}
		); 
	} else {
		console.log("ERR: Authenticaton did not work. userFirebaseId is null");
	}

	// Change global activityArry so that visuals reflect updated database
	fdb.ref(userFirebaseId + '/todos').once('value').then(function(snapshot){
		if (snapshot.val()) global.activityArray = Object.entries(snapshot.val())
	  });

	return;
}

export function achieveTask(userFirebaseId, activityId, activityName, activityDesc) {
  	fdb.ref(userFirebaseId + '/achieved').update({
	  [activityId] : [activityName, activityDesc],
	      },
      function(error) {
	  if (error) {
	      console.log("ERR: Unable to store in database");
      } else {
	  console.log("SUCCESS: Appended ", activityName, " to achivement list in Busy Beagle database");
	  }}
	);

	/* One the user achieves a task, it will no longer appear in 
		the "To-Do" section due to call to removeTask */
	removeTask(userFirebaseId, activityId);

	fdb.ref(userFirebaseId + '/achieved').once('value').then(function(snapshot){
		if (snapshot.val()) global.achievedArray = Object.entries(snapshot.val())
	  });

  console.log("Firebase function achieveTask ran for user: ", userFirebaseId);
  return
};


