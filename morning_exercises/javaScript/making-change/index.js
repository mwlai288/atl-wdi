// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here
  price = price * 100;
  payment = payment * 100;
  var change = Math.floor(payment - price); // (payment - price) * 100);

  if (change <=0) {
  	return [0,0,0,0];
 }
 var quarters = Math.floor(change/25);
 change = change % 25 // change %= 25;

 var dime = Math.floor(change/10);
 change = change % 10; // change %= 10;

 var nickel = Math.floor(change/5);
 change = change % 5;

var pennies = Math.floor(change);

var coins = [quarters, dime, nickel, pennies];

return coins; 
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
