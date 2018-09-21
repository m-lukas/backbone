//retrieving the eventlist
// Tutorial https://www.youtube.com/watch?v=nUUPedePJ4o&t=4s


// Test Heading
var heading = document.getElementById("heading");

var firebaseEventRef = firebase.database().ref("heading");
  firebaseEventRef.on('value', function(datasnapshot){
  heading.innerText = datasnapshot.val();
  });

var rootRef = firebase.database().ref().child("events");

// Event List
rootRef.once("value", function(snap) {
   snap.forEach(function(data) {
      var name = data.val().name;
      var text = data.val().text;
      var location = data.val().location;
      var pic = data.val().pic;
      var startt = data.val().startt;
      var endt = data.val().endt;
      var points = data.val().points;
      var key = data.key;

      $("#table").append("<tr><td>" + name + "</td><td>" + text + "</td><td>" + location + "</td><td>" + pic + "</td><td>" + startt + "</td><td>" + endt + "</td><td><button id='upvoteBtn' onclick='upvote(" + key + ")'> Upvote </button></td><td><button id='downvoteBtn' onclick='downvote(" + key + ")'> Downvote </button></td><td id='point'>" + points + "</td><td>" + key + "</td></tr>");
    });
});

/* points is not defined */

var points = document.getElementById("points");


//Voting
function upvote(key) {
  var x = points;
  x = x + 1;
  points = x
  console.log(key);
  var updates = {
      points: points,
      }
    rootRef.child(key/*<-- adding real key here */).update(updates);
    document.getElementById("point").innerHTML = points
  };

function downvote(key) {
  var x = points;
  x = x - 1;
  points = x
  var updates = {
      points: points,
      }
    rootRef.child(key).update(updates);
    document.getElementById("point").innerHTML = points
  };

function whatispoints() {
  console.log(points);
};
