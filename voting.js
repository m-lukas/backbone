//var point = document.getElementById("point");
//var point = 0
var x = 0


function upvote() {
  x = x + 1
  document.getElementById("point").innerHTML = x
};

function downvote() {
  x = x - 1
  document.getElementById("point").innerHTML = x
};
