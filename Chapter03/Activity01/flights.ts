export interface Flight {
  destination: string;
  flightNumber: number;
  seatsHeld: number;
  seatsRemaining: number;
  time: string;
}

const flights: Flight[] = [
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

export const getDestinations = (): Flight[] => flights;

export const checkAvailability = (
  flight: Flight,
  seatsRequested: number
): boolean => {
  return seatsRequested <= flight.seatsRemaining - flight.seatsHeld ? true : false;
};

export const holdSeats = (flight: Flight, seatsRequested: number): Flight => {
  if (checkAvailability(flight, seatsRequested)) {
    flight.seatsHeld += seatsRequested;
    return flight;
  } else {
    throw new Error('There are not enough available seats on this flight');
  }
};

export const reserveSeats = (
  flight: Flight,
  seatsRequested: number
): Flight => {
  if (checkAvailability(flight, seatsRequested)) {
    flight.seatsRemaining -= seatsRequested;
    flight.seatsHeld -= seatsRequested;

    return flight;
  } else {
    throw new Error('There are not enough available seats on this flight');
  }
};
