// Assignment I: JavaScript Library
// Finish the five methods attached to the _ object to create your own custom library.  
// The purpose of this assignment is to show how a simple JavaScript library can be made. 

// One important concept that we want you to learn through this assignment is how to pass data to and from callbacks. 
// You pass data to a callback with a parameter and you pass data from the callback back to the parent function with a return. 
// While you are going through this assignment pay close attention to this relationship.

const _ = {
    map: function(array, callback) {
        //code here;
        let temp = [];
        for(let i = 0; i < array.length; i++){
            temp.push(callback(array[i]));
        }
        return temp;
    },
    reduce: function(array, callback, memo) { 
        // code here;
        let el = 0;
        if(!memo){ 
            memo = array[0];
            el = 1;
        }
        for(let i = el; i < array.length; i++){
            memo = callback(array[i], memo);
        }
        return memo;
    },
    find: function(array, callback) {
        // code here;
        for(let i = 0; i < array.length; i++){
            if(callback(array[i])){
                return array[i];
            }
        }
    },
    filter: function(array, callback) { 
        // code here;
        let temp = [];
        for(let i = 0; i < array.length; i++){
            if(callback(array[i])){
                temp.push(array[i]);
            }
        }
        return temp;
    },
    reject: function(array, callback) { 
      // code here;
        let temp = [];
        for(let i = 0; i < array.length; i++){
            if(!callback(array[i])){
                temp.push(array[i]);
            }
        }
        return temp;
    }
  }
 // you just created a library with 5 methods!
 // This does NOT work
const numsArray = [1, 2, 3, 4, 5, 6];

let map = _.map(numsArray, function (num){ return num * 3; });
console.log('map: ', map);
// if things are working right, this will return [3,6,9,12,15,18]

let find = _.find(numsArray, function (num){ return num % 2 == 0; });
console.log('find: ', find);
// if things are working right, this will return [2]

let filter = _.filter(numsArray, function (num){ return num % 2 == 0; });
console.log('filter: ', filter);
// if things are working right, this will return [2,4,6]

let reject = _.reject(numsArray, function(num){ return num % 2 == 0; });
console.log('reject: ', reject);
// if things are working right, this will return [1,3,5]

let reduce = _.reduce(numsArray, function(num, memo){ return num + memo; }, 2);
console.log('reduce: ', reduce);
// if things are working right, this will return [23]