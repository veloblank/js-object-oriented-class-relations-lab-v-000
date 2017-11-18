let store = {drivers: [], passengers: [], trips: []}
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name
    //store driver
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter((trip) => trip.driverId === this.id);
  }

  passengers(){
    return this.trips().map((trip) => trip.passenger());
  }

}

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    //store passenger
    store.passengers.push(this)
  }

  trips(){
     return store.trips.filter((trip) => trip.passengerId === this.id);
  }

  drivers(){
    return this.trips().map((trip)=> trip.driver());
  }
}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    if(passenger){
      this.passengerId = passengerId
    }
    if(driver){
      this.driverId = driverId
    }
    //store trip
    store.trips.push(this)
  }
  passenger(){
    return store.passengers.find((passenger) => passenger.id === this.passengerId);

  }

  driver(){
    return store.drivers.find((driver) => driver.id === this.driverId);

  }




}
