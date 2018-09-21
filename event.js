// Event Database Tutorial https://www.youtube.com/watch?v=F6UWb9FNnj4&t=6s

// getting the inputs out of html into vars
var submitBtn = document.getElementById("submitBtn");
var eventName = document.getElementById("eventName");
var eventText = document.getElementById("eventText");
var eventPic = document.getElementById("eventPic");
var eventLocation = document.getElementById("eventLocation");
var eventStartT = document.getElementById("eventStartT");
var eventEndT = document.getElementById("eventEndT");

// Function for submitting the inputs
function submitClick() {
// ref to firebase
  var firebaseRef = firebase.database().ref("events");

// one js object for each event
  var events = {
    name: eventName.value,
    text: eventText.value,
    pic: eventPic.value,
    location: eventLocation.value,
    startt: eventStartT.value,
    endt: eventEndT.value,
    points: 0,
  }
  firebaseRef.push().set(events);
}
