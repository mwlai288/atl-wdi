// setTimeout(function() {
//     console.log('TIMED OUT!');
// }, 300);


'use strict';

    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
        return new Promise(function(fulfill, reject) {
            fulfill('FULFILLED!')
        })
        setTimeout(function(){
            console.log(fulfull);
        }, 300);
    });

    // Your solution here