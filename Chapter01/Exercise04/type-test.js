// variables with differing types of values
var daysInWeek = 7;
var person = "Ada Lovelace";
var isRaining = false;
var today = new Date();
var months = ["January", "February", "March"];
var notDefined = undefined;
var nothing = null;
var add = function (x, y) { return x + y; };
var calculator = {
    add: add
};
// Adding all the variables into a containing array, using the array literal syntax
var everything = [daysInWeek, person, isRaining, today, months, notDefined, nothing, add, calculator];
// Loops all the variables using a `for..of` loop, and for each value call the `typeof` operator. 
// Shows the result on the console, along with the value itself
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var something = everything_1[_i];
    var type = typeof something;
    console.log(something, type);
}
