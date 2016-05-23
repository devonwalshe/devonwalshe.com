var x = "google";

function changesite() {
  var answer = confirm("are you ready to change sites?");
  if (answer) window.location = "http://google.com";
}

// setTimeout(changesite, 3000);

function debug(msg) {
  var log = document.getElementById("debuglog");
  if (!log) {
    log = document.createElement("div");
    log.id = "debuglog";
    log.innerHTML = "<h1>Debug Log</h1>";
    document.body.appendChild(log);
  }
  var pre = document.createElement("pre");
  var text = document.createElement(msg);
  
  pre.appendChild(text);
  log.appendChild(pre);
};

// function hide(e, reflow) {
//   if (reflow) {
//     e.style.display = "none";
//   }
//   else {
//     e.style.visibility = "hidden";
//   }
// }

function highlight(e) {
  if (!e.className) e.className = "highlight";
  else e.className += " highlight";
}

window.onload = function () {
  var images = document.getElementsByTagName("img");
  
  for(var i = 0; i < images.length; i++) {
    image = images[i];
    if (image.addEventListener)
      image.addEventListener("click", hide, false);
    else
      image.attachEvent("onClick", hide);
  }
  
  function hide(event) { event.target.style.visibility = "hidden"; }
  
};