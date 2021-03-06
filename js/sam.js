
var height, scrollPos, scrollPercent;

var body;

var bg;
var bgHeightDiff;

var thesisToggled;

function setup(){
  createCanvas(0,0);
  body = document.querySelector(".main-column");
  bg = document.querySelector(".bg");
  window.onscroll = parallax;
  thesisToggled = false;
}

function draw(){
  

}

function mousePressed(){
  getPercent();
} 

function getPercent(){
  height = document.body.clientHeight;
  scrollPos = window.pageYOffset;
  scrollPercent = scrollPos/height;
}

function parallax(){
  getPercent();
  bgHeightDiff = bg.clientHeight - window.innerHeight;
  bg.style.top = "-" + lerp(0, bgHeightDiff, scrollPercent) + "px";
  // console.log("height: " + height + ", scrollPos: " + scrollPos + ", percent: " + scrollPercent);
  console.log("bg height diff: " + (bg.clientHeight - window.innerHeight));
  console.log("top offset: " + lerp(0, bgHeightDiff, scrollPercent));
}

function toggleThesis(){
  var thesis = document.querySelector('.thesis');
  if (!thesisToggled){
    if (windowWidth > 720){
      thesis.style.maxHeight = "600px";
      
    } else {
      thesis.style.maxHeight = "300px";
    }
    thesisToggled = true;
  } else {
    thesis.style.maxHeight = "0px";
    thesisToggled = false;
  }
}