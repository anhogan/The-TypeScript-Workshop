var numbers = ["One", "Two", "Three", "Four", "Five"];
var delay = function (ms) {
    var result = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
    return result;
};
// delay(1000)
// .then(() => console.log(numbers[0]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[1]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[2]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[3]))
// .then(() => delay(1000))
// .then(() => console.log(numbers[4]));
var promise = Promise.resolve();
var _loop_1 = function (number) {
    promise = promise
        .then(function () { return delay(1000); })
        .then(function () { return console.log(number); });
};
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    _loop_1(number);
}
;
