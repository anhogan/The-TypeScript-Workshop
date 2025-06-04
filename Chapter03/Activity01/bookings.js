"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeBooking = exports.processPayment = exports.startBooking = void 0;
var flights_solution_1 = require("./flights-solution");
var bookings = [];
var bookingsFactory = function (bookingNumber) { return function (flight, seatsHeld) { return ({
    bookingNumber: bookingNumber++,
    flight: flight,
    paid: false,
    seatsHeld: seatsHeld,
    seatsReserved: 0,
}); }; };
var createBooking = bookingsFactory(1);
var startBooking = function (flight, seatsRequested) {
    if ((0, flights_solution_1.checkAvailability)(flight, seatsRequested)) {
        (0, flights_solution_1.holdSeats)(flight, seatsRequested);
        return createBooking(flight, seatsRequested);
    }
    else {
        throw new Error('There are not enough available seats on this flight to start the booking');
    }
};
exports.startBooking = startBooking;
var processPayment = function (booking) {
    booking.paid = true;
    return booking;
};
exports.processPayment = processPayment;
var completeBooking = function (booking) {
    booking.seatsReserved += booking.seatsHeld;
    (0, flights_solution_1.reserveSeats)(booking.flight, booking.seatsReserved);
    booking.seatsHeld = 0;
    return booking;
};
exports.completeBooking = completeBooking;
