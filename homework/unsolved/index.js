/*
  1. Create a prompt to add peoples name to an array. The array will start out as empty
  2. When adding the name to the array, make sure to also capitalize the first letter in the name
  3. Check that the prompt input is at least 2 characters or more
  4. Create a string out of the array stating that these are the names in the array, and have them
     separated by commas
  5. Have 2 other arrays:
      - 1 array will store everyone's name that starts with a vowel
      - 1 array will store everyone's name that starts with a consonant
      - loop through both array and log the people in them
  6. When the original array gets to a length of 10, dont let any more items in the array.
     Alert the user of this as well.

  Bonus
  1. Using typeof, check if the input is a string and include it in your logic,
     making sure that the non-string does not get added to the array
*/

var num = 0;
var studentsArray = [];
var studentsThatStartWithVowel = [];
var studentsThatSTartWithConsonant = [];

var vowels = "aeiouAEIOU"

/*
  if you want to make debugging easier, you can make the number
  on line 25 smaller. You can reduce it to 10,5..whatever is easier for you
*/
while(num < 10){
  if(studentsArray.length < 10){
    var namePrompt = prompt("enter a name");
    /*
      Write your logic here
    */
    if(namePrompt.length >= 2 && isNaN(namePrompt)){

      studentsArray.push(namePrompt.charAt(0).toUpperCase() + namePrompt.substring(1, namePrompt.length));

      if(vowels.indexOf(namePrompt.charAt(0)) > -1){
        studentsThatStartWithVowel.push(namePrompt)
      } else {
        studentsThatSTartWithConsonant.push(namePrompt)
      }

      num++;
    } else {
      alert("Make sure the name input is more than 1 letter and a string")
    }
  } else {
    alert("Only 10 Students Allowed in this Class")
  }
}

console.log(studentsArray);
console.log("These are the students in the class: " + studentsArray.join(", "));

for(var i = 0; i < studentsThatStartWithVowel.length; i++){
  console.log(studentsThatStartWithVowel[i] + " starts with a vowel")
}
for(var i = 0; i < studentsThatSTartWithConsonant.length; i++){
  console.log(studentsThatSTartWithConsonant[i] + " starts with a consonant")
}
