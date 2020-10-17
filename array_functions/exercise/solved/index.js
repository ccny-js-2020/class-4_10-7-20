/*

  //Alphabet String
  1. Turn the alphabet string into an array with each index being a letter of the alphabet (.i.e. ['a', 'b'','c'.....])
  2. Turn the alphabet array back into an alphabet string

  //Lyric String
  3. Turn the lyricString into an array, splitting it by the underscore
  4. Log all the words in the lyric string using a loop
  5. Log all the words in the lyric string with a Capital first letter
  6. Create a new sentence string with all Capital first letters using push and join

  //Tongue Twister
  7. Turn the string into the correct sentence by using a split and a join
*/

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lyricString = "here_i_go_again_on_my_own";
var tongueTwister = "how much bird could a birdchuck chuck if a birdchuck could chuck bird"

//1
var splitAlphabet = alphabet.split("");
console.log(splitAlphabet);

//2
console.log(splitAlphabet.join(""));

//3
var splitLyricString = lyricString.split("_");
console.log(splitLyricString);

//4
for(var i = 0; i < splitLyricString.length; i++){
  console.log(splitLyricString[i])
}

//5
for(var i = 0; i < splitLyricString.length; i++){
  console.log(splitLyricString[i].charAt(0).toUpperCase() + splitLyricString[i].substring(1, splitLyricString[i].length))
}

//6
var capitalFirstLettersLyrics = [];
for(var i = 0; i < splitLyricString.length; i++){
  capitalFirstLettersLyrics.push(splitLyricString[i].charAt(0).toUpperCase() + splitLyricString[i].substring(1, splitLyricString[i].length))
}

console.log(capitalFirstLettersLyrics.join(" "));

//7
var split = tongueTwister.split("bird");
console.log(split.join("wood"));
