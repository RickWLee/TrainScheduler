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
  $("#addTime").on('click',function(){
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
    // return false;
  });

});