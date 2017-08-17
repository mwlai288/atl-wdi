
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
    var bar = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < bar.length; i++) {
      bar[i].style.width = progress + '%';
}
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var fuse = timerValue/100
    var fuses = document.getElementsByClassName('unburnt').length
    for (i = 0; i < fuses.length; i++) {
    	document.getElementByClassName('unburnt')[i].style.width = fuse * 98 + '%'
    	document.getElementsByClassName('burnt')[i].style.width = (1 - fuse) * 98 + '%'
    }
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};