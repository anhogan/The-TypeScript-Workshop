import {
  checkAvailability,
  getDestinations,
  holdSeats,
  reserveSeats
} from './flights';

describe('flights tests', () => {
  const destinations = getDestinations();

  test('get destinations', () => {
    expect(destinations).toHaveLength(7);
    expect(destinations[0]).toEqual({
      destination: 'Lagos',
      flightNumber: 1,
      seatsHeld: 0,
      seatsRemaining: 30,
      time: '5:30',
    });
    expect(destinations[1]).toEqual({
      destination: 'Chongquing',
      flightNumber: 2,
      seatsHeld: 0,
      seatsRemaining: 4,
      time: '7:00',
    });
    expect(destinations[2]).toEqual({
      destination: 'Goiânia',
      flightNumber: 3,
      seatsHeld: 0,
      seatsRemaining: 104,
      time: '8:30',
    });
    expect(destinations[3]).toEqual({
      destination: 'Ottawa',
      flightNumber: 4,
      seatsHeld: 0,
      seatsRemaining: 9,
      time: '9:30',
    });
    expect(destinations[4]).toEqual({
      destination: 'Brisbane',
      flightNumber: 5,
      seatsHeld: 0,
      seatsRemaining: 56,
      time: '10:30',
    });
    expect(destinations[5]).toEqual({
      destination: 'Istanbul',
      flightNumber: 6,
      seatsHeld: 0,
      seatsRemaining: 0,
      time: '12:00',
    });
    expect(destinations[6]).toEqual({
      destination: 'Istanbul',
      flightNumber: 7,
      seatsHeld: 0,
      seatsRemaining: 7,
      time: '14:30',
    });
  });
  test('checking availability', () => {
    const flight = destinations[0];
    const isAvailable = checkAvailability(flight, 10);
    const isNotAvailable = checkAvailability(flight, 40);

    expect(isAvailable).toEqual(true);
    expect(isNotAvailable).toEqual(false);
  });
  test('hold seats', () => {
    const flight = destinations[0];

    expect(() => holdSeats(flight, 40)).toThrow(Error);
    expect(() => holdSeats(flight, 40)).toThrow('Not enough seats remaining!');

    holdSeats(flight, 10);

    expect(flight.seatsHeld).toEqual(10);
    expect(flight.seatsRemaining).toEqual(30);

    holdSeats(flight, 5);

    expect(flight.seatsHeld).toEqual(15);
    expect(flight.seatsRemaining).toEqual(30);
  });
  test('reserve seats', () => {
    const flight = destinations[0];

    expect(() => reserveSeats(flight, 40)).toThrow(Error);
    expect(() => reserveSeats(flight, 40)).toThrow('Seats were not held!');

    reserveSeats(flight, 5);

    expect(flight.seatsHeld).toEqual(10);
    expect(flight.seatsRemaining).toEqual(25);

    reserveSeats(flight, 3);

    expect(flight.seatsHeld).toEqual(7);
    expect(flight.seatsRemaining).toEqual(22);
  });
});
