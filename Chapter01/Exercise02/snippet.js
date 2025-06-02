function snippet(text, length) {
    // Check if the text is smaller than the specified length, and if it is, return it unchanged
    if (text.length < length) {
        return text;
    }
    // If the text is larger than the maximum length we'll need to add an ellipsis.
    // The maximum number of characters that we'll be able to show is the specified length 
    // less the length of our ellipsis (it takes space too). 
    // We'll use the `slice` string method to extract that many characters from the text.
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    // We'll find the last word boundary before the cutoff, using `lastIndexOf`, 
    // and then combine the text up to that point with the ellipsis.
    var lastSpace = result.lastIndexOf(" ");
    result = "".concat(result.slice(0, lastSpace)).concat(ellipsis);
    // Return the result from the function
    return result;
}
// correct call and usage
var resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(resultOne);
/* COMMENT FROM HERE  */
// // missing second parameter
// var resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);
// // The first parameter is of incorrect type
// var resultThree = snippet(false, 40);
// console.log(resultThree);
// // The second parameter is of incorrect type
// var resultFour = snippet("Lorem ipsum dolor sit amet", false);
// console.log(resultFour);
// // The result is assigned to a variable of incorrect type
// var resultFive = snippet("Lorem ipsum dolor sit amet", 20);
// console.log(resultFive);
/* COMMENT TO HERE  */ 
