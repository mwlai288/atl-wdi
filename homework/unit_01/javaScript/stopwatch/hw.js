// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
 const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  
  advanceTenMillisecs: function(){
    // Your Code Here
    // Increase number of millseconds by 10
        this.millisecs += 10;
    // Once millseconds is 1000
      if (this.millisecs >= 1000); {
        //reset number of millseconds to 0
        this.millisecs -=1000;
        //increment number of seconds
        this.secs ++;
      }
    // Once number of seconds is 60
        if (this.secs >= 60) {
        // reset number of seconds to 0
        this.secs -= 60;
        // increment number of minutes
        this.mins ++;
      }

  },
  reset: function(){
    // Your Code Here

    // Reset minutes, seconds, and milliseconds to 0
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    // Erase list of laps to be empty
    this.laps = [];

  },
  start: function(){
    // Your Code Here
    // App not running
      if (!this.isRunning) {
        //Button to start running
        this.isRunning = true
        //Make button call 'tickClock' to make numbers move
        this.tickClock();
    // Once app is running
      }
        // do nothing

  },
  stop: function(){
    // Your Code Here
      
    // If app is running
    this.isRunning = false;
        // set state of stopwatch to 'not running'
        
    // If app is not running

        // do nothing
  },
  lap: function(){
    // Your Code Here

    // If stopwatch running
     
        // adds a record of current value of min, sec, and ms to list of laps
    

    // If stopwatch is not running
  
        // do nothing
}

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs) {
    // Your Code Here

    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
  },


    //make string two characters long

  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    // Input recorded lap into 'lap-list' element with li element
  },
};

const ViewHelpers = {
  zeroFill: function(number, length){
    var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
    return str;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    // Get times from 'Stopwatch'
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
},
  handleClickStart: function() {
    // Your Code Here
    // If not running
      // Start stopwatch
      if (!Stopwatch.isRunning) { Stopwatch.start(); }
  },
      
    // If already running
      // Do nothing
  handleClickStopReset: function(){
    // Your Code Here
    // If stopwatch is running
      // Stop the stopwatch
      if (Stopwatch.isRunning) {
        Stopwatch.stop();
      } else {
   // If stopwatch is not running
      // Reset stopwatch
        Stopwatch.reset();
      //update time display to '00:00:00'
      ViewEngine.updateTimeDisplay(0,0,0);
    
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};
