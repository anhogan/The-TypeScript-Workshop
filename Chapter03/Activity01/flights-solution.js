"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserveSeats = exports.holdSeats = exports.checkAvailability = exports.getDestinations = void 0;
var flights = [
    {
        destination: 'Lagos',
        flightNumber: 1,
        seatsHeld: 0,
        seatsRemaining: 30,
        time: '5:30',
    },
    {
        destination: 'Chongquing',
        flightNumber: 2,
        seatsHeld: 0,
        seatsRemaining: 4,
        time: '7:00',
    },
    {
        destination: 'Goiânia',
        flightNumber: 3,
        seatsHeld: 0,
        seatsRemaining: 104,
        time: '8:30',
    },
    {
        destination: 'Ottawa',
        flightNumber: 4,
        seatsHeld: 0,
        seatsRemaining: 9,
        time: '9:30',
    },
    {
        destination: 'Brisbane',
        flightNumber: 5,
        seatsHeld: 0,
        seatsRemaining: 56,
        time: '10:30',
    },
    {
        destination: 'Istanbul',
        flightNumber: 6,
        seatsHeld: 0,
        seatsRemaining: 0,
        time: '12:00',
    },
    {
        destination: 'Istanbul',
        flightNumber: 7,
        seatsHeld: 0,
        seatsRemaining: 7,
        time: '14:30',
    },
];
var getDestinations = function () { return flights; };
exports.getDestinations = getDestinations;
var checkAvailability = function (flight, seatsRequested) { return seatsRequested <= flight.seatsRemaining - flight.seatsHeld; };
exports.checkAvailability = checkAvailability;
var holdSeats = function (flight, seatsRequested) {
    if (flight.seatsRemaining - flight.seatsHeld < seatsRequested) {
        throw new Error('Not enough seats remaining!');
    }
    flight.seatsHeld += seatsRequested;
    return flight;
};
exports.holdSeats = holdSeats;
var reserveSeats = function (flight, seatsRequested) {
    if (flight.seatsHeld < seatsRequested) {
        throw new Error('Seats were not held!');
    }
    flight.seatsHeld -= seatsRequested;
    flight.seatsRemaining -= seatsRequested;
    return flight;
};
exports.reserveSeats = reserveSeats;
