"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookings_1 = require("./bookings");
var flights_1 = require("./flights");
var destinations = (0, flights_1.getDestinations)();
// Let's fly to Lagos
var lagosBooking = (0, bookings_1.startBooking)(destinations[0], 1);
lagosBooking = (0, bookings_1.processPayment)(lagosBooking);
lagosBooking = (0, bookings_1.completeBooking)(lagosBooking);
console.log('Booked to Lagos', lagosBooking);
console.log('Lagos flight', destinations[0]);
// Want to go to Istanbul, but the flight is full!
// try {
//   startBooking(destinations[5], 7);
// } catch (e) {
//   console.error(e.message);
// }
// Let's try the other flight to Istanbul
var istanbulBooking = (0, bookings_1.startBooking)(destinations[6], 7);
istanbulBooking = (0, bookings_1.processPayment)(istanbulBooking);
istanbulBooking = (0, bookings_1.completeBooking)(istanbulBooking);
console.log('Booked to Istanbul', istanbulBooking);
console.log('Istanbul flight', destinations[6]);
// Can we get one more on the flight to Istanbul?
try {
    (0, bookings_1.startBooking)(destinations[6], 1);
}
catch (e) {
    console.error(e.message);
}
