
// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    var numericDisplay = document.getElementById('numeric-display');
    		numericDisplay.textContent= timerValue;
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
   var progress = 100 - timerValue;
    var bars = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.width = progress + '%';
}
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};