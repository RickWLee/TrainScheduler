$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUIF90q59JOuKU7JcId2pAVAVUnXLKeQw",
    authDomain: "traintimetable-6667f.firebaseapp.com",
    databaseURL: "https://traintimetable-6667f.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "57971458789"
  };
  firebase.initializeApp(config);

// define var 
  var database=firebase.database();
  var trainname="";
  var destination="";
  var traintime1="";
  var frequency=0;

 // create button function
  $("#addTrainbtn").on('click',function(){
    // clean up and set the input value
	  var trainname=$("#trainname").val().trim();
	  var destination=$("#destination").val().trim();
	  var traintime1=$("#traintime1").val().trim();
	  var frequency=$("#frequency").val().trim();
    //console.log value
    console.log(trainname);
    console.log(destination);
    console.log(traintime1);
    console.log(frequency);
    //make relation between database key with value
  	database.ref().push({
  			trainname : trainname,
  			destination : destination,
  			traintime1 : traintime1,
  			frequency: frequency			
  		});
    $('.add-form input').val('');
    // clear the fields
    return false;
  });

  //Firebase watcher + Add new entry for the train schedule


function onSuccess(snapshot) {

  // Log everything that's coming out of snapshot
  console.log(snapshot.val());
  console.log(snapshot.val().trainname);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().traintime1);
  console.log(snapshot.val().frequency);

 
  var trainname=snapshot.val().trainname;
  var destination=snapshot.val().destination;
  var traintime1=snapshot.val().traintime1;
  var frequency=snapshot.val().frequency;

  //calculating next train schedule and minute to wait
  var traintime1=moment(traintime1,'HH:mm')
  console.log("first time ="+traintime1)
  var timeNow=moment();
  console.log("time now ="+timeNow);
  var timeBetween=timeNow.diff(traintime1, 'minute');
  console.log("timeBetween =" + timeBetween);
  var timelastTrainLeft=timeBetween%frequency;
  console.log("timeTrain last left =" +timelastTrainLeft);
  var minAway= frequency - timelastTrainLeft;
  console.log("Minute Away =" +minAway);

  //Next arrival time
  var nextTrain = moment().add(minAway,"minute");
  console.log("Arrival Time: "+moment(nextTrain).format("HH:mm"));
  nextTrain= moment(nextTrain).format("HH:mm");




 // Add entry into table
  var tr=$("<tr>");
  var a=$("<td>");
  var b=$("<td>");
  var c=$("<td>");
  var d=$("<td>");
  var e=$("<td>");

  a.append(trainname);
  b.append(destination);
  c.append(frequency);
  d.append(nextTrain);
  e.append(minAway);

  tr.append(a).append(b).append(c).append(d).append(e);
 

  $('#tSchedule').append(tr);
}


function onFailure(errorObject) {
  console.log("Errors handled: " + errorObject.code)
}


database.ref().on("child_added", onSuccess, onFailure);



});