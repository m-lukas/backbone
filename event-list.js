//retrieving the eventlist
// Tutorial https://www.youtube.com/watch?v=nUUPedePJ4o&t=4s


// Test Heading
var heading = document.getElementById("heading");

var firebaseEventRef = firebase.database().ref("heading");
  firebaseEventRef.on('value', function(datasnapshot){
  heading.innerText = datasnapshot.val();
  });

var rootRef = firebase.database().ref().child("events");

var keypoints;

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

//making an array to match key and points
      keypoints = [key, points];

      $("#table").append("<tr><td>" + name + "</td><td>" + text + "</td><td>" + location + "</td><td>" + pic + "</td><td>" + startt + "</td><td>" + endt + "</td><td><button id='upvoteBtn' onclick='upvote(" + keypoints + ")'> Upvote </button></td><td><button id='downvoteBtn' onclick='downvote(" + keypoints + ")'> Downvote </button></td><td id='point'>" + points + "</td></tr>");
    });
});

// Funtcion gets called out of html upvote(key) key is not defined


//Voting
function upvote(){
  var key = keypoints[0];
  var points = keypoints[1];
  var x = points;
  x = x + 1;
  points = x

  var updates = {
      points: points,
      }
  rootRef.child(key).update(updates);
  document.getElementById("point").innerHTML = points
  };

function downvote(keypoints){
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
