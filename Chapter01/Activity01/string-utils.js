/** ---------- toTitleCase ---------- **/
function toTitleCase(input) {
    // split the string into an array on every occurence of the space character
    var words = input.split(" ");
    var titleWords = [];
    // loop through each word
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        // take the first character using `slice` and convert it to uppercase
        var initial = word.slice(0, 1).toLocaleUpperCase();
        // take the rest of the character using `slice` and convert them to lowercase
        var rest = word.slice(1).toLocaleLowerCase();
        // join the initial and the rest and add them to the resulting array
        titleWords.push("".concat(initial).concat(rest));
    }
    // join all the processed words
    var result = titleWords.join(" ");
    return result;
}
console.log("toTitleCase(\"war AND peace\"):");
console.log(toTitleCase("war AND peace"));
console.log("toTitleCase(\"Catcher in the Rye\"):");
console.log(toTitleCase("Catcher in the Rye"));
console.log("toTitleCase(\"tO kILL A mOCKINGBIRD\"):");
console.log(toTitleCase("tO kILL A mOCKINGBIRD"));
/** ---------- countWords ---------- **/
function countWords(input) {
    // split the words using a regex that will match any occurence of
    // a space, underscore or dash characters
    var words = input.split(/[ _-]/);
    // return the lenght of the array that is the result of the split
    return words.length;
}
console.log("countWords(\"War and Peace\"):");
console.log(countWords("War and Peace"));
console.log("countWords(\"catcher-in-the-rye\"):");
console.log(countWords("catcher-in-the-rye"));
console.log("countWords(\"for_whom the-bell-tolls\"):");
console.log(countWords("for_whom the-bell-tolls"));
/** ---------- toWords ---------- **/
function toWords(input) {
    // split the words using a regex that will match any occurence of
    // a space, underscore or dash characters
    var words = input.split(/[ _-]/);
    return words;
}
console.log("toWords(\"War and Peace\"):");
console.log(toWords("War and Peace"));
console.log("toWords(\"catcher-in-the-rye\"):");
console.log(toWords("catcher-in-the-rye"));
console.log("toWords(\"for_whom the-bell-tolls\"):");
console.log(toWords("for_whom the-bell-tolls"));
/** ---------- repeat ---------- **/
function repeat(input, times) {
    // create a new array that with length of `times`
    // and set each element to the value of the `input` string
    var instances = new Array(times).fill(input);
    // join the elements of the array together
    var result = instances.join("");
    return result;
}
console.log("repeat(\"War\", 3 ):");
console.log(repeat("War", 3));
console.log("repeat(\"rye\", 1):");
console.log(repeat("rye", 1));
console.log("repeat(\"bell\", 0):");
console.log(repeat("bell", 0));
/** ---------- isAlpha ---------- **/
function isAlpha(input) {
    // regex that will match any string that only has upper and lowercase letters 
    var alphaRegex = /^[a-z]*$/i;
    // test our input using the regex
    var result = alphaRegex.test(input);
    return result;
}
console.log("isAlpha(\"War and Peace\"):");
console.log(isAlpha("War and Peace"));
console.log("isAlpha(\"Atonement\"):");
console.log(isAlpha("Atonement"));
console.log("isAlpha(\"1Q84\"):");
console.log(isAlpha("1Q84"));
/** ---------- isBlank ---------- **/
function isBlank(input) {
    // test if the first character of our input is an empty space
    while (input[0] === " ") {
        // successively slice off the first character of the input
        input = input.slice(1);
    }
    // the loop will stop on the first character that is not a space.
    // if we're left with an empty string, we only have spaces in the input
    var result = input === "";
    return result;
}
console.log("isBlank(\"War and Peace\"):");
console.log(isBlank("War and Peace"));
console.log("isBlank(\"       \"):");
console.log(isBlank("       "));
console.log("isBlank(\"\"):");
console.log(isBlank(""));
