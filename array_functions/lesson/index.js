/*
  Array Functions:
  - join
  - pop
  - push
  -length
  -indexOf

  String to array:
  - split
*/
var peopleArray = ["Jane", "Judy", "Joe", "Leroy"];
var peopleArrayTwo = ["Jane", "Judy", "Joe", "Leroy"];
console.log(peopleArray);

//see how many items are in an array using length
console.log(peopleArray.length);

//find the index of an item in the array
console.log(peopleArray.indexOf("Judy"));
console.log(peopleArray.indexOf("Judy") > -1);
//if it is not there, it will return -1 like the string function
console.log(peopleArray.indexOf("Jared"));
console.log(peopleArray.indexOf("Jared") == -1);
//push() adds items to the last index of the array
peopleArray.push("Layla");
peopleArray.push("Bobby");
console.log(peopleArray);

//pop() gets the last value in the array and also removes the last value in the array when
//you attempt to use the array later on
console.log(peopleArray.pop());
console.log(peopleArray);

//join() turns an array into a string, concatanating the values in the array with whatever
//is in between the parentheses, i.e. join(",") will join all of the values in the array with a comma
//and turn it into a string
var peopleArrayString = peopleArray.join(" ") + " John";
console.log(peopleArrayString);
// console.log(peopleArray);

//to turn a string into an array, use split() with the same argument
console.log(peopleArrayString.split(" "));

//splice creates a new array by specifying the indexes of the array you want to keep
//and also changes the state of the array
//look at the console.logs below to view the state of the original array
var splicedArray = peopleArray.splice(0,2);
console.log(splicedArray);
console.log(peopleArray);

//slice is very similar to splice, but does not change the state of the original array
var slicedArray = peopleArrayTwo.slice(0,2);
console.log(splicedArray);
console.log(peopleArrayTwo);
