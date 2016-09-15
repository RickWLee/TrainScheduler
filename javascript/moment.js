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

  var database=firebase.database();

  var trainnames="";
  var destinations="";
  var traintime1s="";
  var frequencies="";

  var trainname=$("#trainname").val().trim();
  var destination=$("#destination").val().trim();
  var traintime1=$("#traintime1").val().trim();
  var frequency=$("frequency").val().trim();
















});