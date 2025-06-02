// Enum with all the operators that we want to support inside our code.
var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
// An (empty) array that can hold multiple tuples of the `[Operator, Operation]` type. 
// This will be our dictionary, where we store all our methods.
var operations = [];
// An add method, that satisfies the `Operation` type
var add = function (first, second) {
    return first + second;
};
// Adding a tuple of the `Operator.Add` value and the `add` function to the `operations` array. 
operations.push([Operator.Add, add]);
var subtract = function (first, second) {
    return first - second;
};
operations.push([Operator.Subtract, subtract]);
var multiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);
var divide = function (first, second) {
    return first / second;
};
operations.push([Operator.Divide, divide]);
var calculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    var operation = tuple[1];
    var result = operation(first, second);
    return result;
};
// A test run of the calculator
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
var modulo = function (first, second) {
    return first % second;
};
operations.push([Operator.Modulo, modulo]);
console.log(calculator(14, 3, Operator.Modulo));
