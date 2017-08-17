//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
<<<<<<< HEAD
// //   - Find the cost of a small barrel:
// //   - We know 1 small barrel costs 60 right off the bat
// 		var smallBarrell = 60;
// // - Find the cost of the large barrel:
// //   - First find the cost of all large barrels
// //     - To do that, grab the total cost (825)
// //     - Subtract the small barrels from the total
// //       - calculate the small barrels total price (2 * 60 = 120)
// 				var barrel = (total - (small * smallBarrell)) / large;
// //     - The remainder amount is the total cost of large barrels
// //     - Divide total cost of large barrels by number of barrels
// 			return barrel;
		var smallBarrel = 60;
  var largeBarrel = (totalCost - (small * smallBarrel)) / large;

  return largeBarrel;
=======
>>>>>>> 34678de1bcb035c210ce14c1a415e71befb4bf8c
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
// - Find the distance of the earth circumference in miles
		var earthCircumference = 24901;
// - Calculate the # of gallons used to travel around the earth
		// - circumference / MPG (miles per gallon)
		var numberofGallons = earthCircumference/milesPerGallon
// - Calculate the cost:
	// - total gallons used * cost of fuel
		var cost = numberofGallons * fuelPrice
		return cost
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
//   - Find the total amount of pure fruit juice (gal)
//   - Total of Costco pure fruit juice:
//     - percentage pure fruit juice * number of gallons
		var costco = (b / 100) 	* a;
//   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
		var kirkland = (d / 100) * c;
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
		var totalJuice = a + c;
// - Find the total amount of juice (gal):
//   - Total of Costco juice + Total of Kirkland Juice
		var totalPureJuice = kirkland + costco;
// - Calculate (total pure fruit juice) / (total juice)
		var final = totalPureJuice/totalJuice;
		return final;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
