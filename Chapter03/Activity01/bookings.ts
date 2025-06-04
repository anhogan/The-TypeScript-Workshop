import {
  Flight,
  checkAvailability,
  holdSeats,
  reserveSeats
} from './flights-solution';

export interface Booking {
  bookingNumber: number;
  flight: Flight;
  paid: boolean;
  seatsHeld: number;
  seatsReserved: number;
}

const bookings: Booking[] = [];

const bookingsFactory = (bookingNumber: number) => (
  flight: Flight,
  seatsHeld: number
): Booking => ({
  bookingNumber: bookingNumber++,
  flight,
  paid: false,
  seatsHeld,
  seatsReserved: 0,
});

const createBooking = bookingsFactory(1);

export const startBooking = (
  flight: Flight,
  seatsRequested: number
): Booking => {
  if (checkAvailability(flight, seatsRequested)) {
    holdSeats(flight, seatsRequested);
    return createBooking(flight, seatsRequested);
  } else {
    throw new Error('There are not enough available seats on this flight to start the booking');
  }
};

export const processPayment = (booking: Booking): Booking => {
  booking.paid = true;
  return booking;
};

export const completeBooking = (booking: Booking): Booking => {
  booking.seatsReserved += booking.seatsHeld;
  reserveSeats(booking.flight, booking.seatsReserved);
  booking.seatsHeld = 0;

  return booking;
};
