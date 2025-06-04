import { completeBooking, processPayment, startBooking } from './bookings';
import { getDestinations } from './flights';

const destinations = getDestinations();

describe('bookings tests', () => {
  const destinations = getDestinations();
  let flight = destinations[0];

  test('create a booking', () => {
    const booking = startBooking(flight, 1);

    // Validate Booking fields
    expect(typeof booking.bookingNumber).toBe('number');
    expect(typeof booking.paid).toBe('boolean');
    expect(typeof booking.seatsHeld).toBe('number');
    expect(typeof booking.seatsReserved).toBe('number');

    // Validate Booking values
    expect(booking).toEqual({
      bookingNumber: 1,
      flight: destinations[0],
      paid: false,
      seatsHeld: 1,
      seatsReserved: 0,
    });

    // Validate Flight fields
    expect(typeof booking.flight.destination).toBe('string');
    expect(typeof booking.flight.flightNumber).toBe('number');
    expect(typeof booking.flight.seatsHeld).toBe('number');
    expect(typeof booking.flight.seatsRemaining).toBe('number');
    expect(typeof booking.flight.time).toBe('string');

    // Validate Flight values
    expect(booking.flight).toEqual({
      destination: 'Lagos',
      flightNumber: 1,
      seatsHeld: 1,
      seatsRemaining: 30,
      time: '5:30',
    });
  });
  test('pay for a booking', () => {
    const booking = startBooking(flight, 1);
    processPayment(booking);

    expect(booking.paid).toEqual(true);
  });
  test('complete a booking', () => {
    const booking = startBooking(flight, 1);
    completeBooking(booking);

    expect(booking.seatsHeld).toEqual(0);
    expect(booking.seatsReserved).toEqual(1);
    expect(booking.flight.seatsHeld).toEqual(2);
    expect(booking.flight.seatsRemaining).toEqual(29);
  });
});

describe('error scenarios', () => {
  const destinations = getDestinations();
  let flight = destinations[0];

  test('no available seats', () => {
    expect(() => startBooking(flight, 32)).toThrow(Error);
    expect(() => startBooking(flight, 32)).toThrow('Booking not available!');
  });
  test('unable to complete booking', () => {
    const booking = startBooking(flight, 1);
    booking.seatsHeld += 30;

    expect(() => completeBooking(booking)).toThrow(Error);
    expect(() => completeBooking(booking)).toThrow('Seats were not held!');
  })
});
