// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class -------------Done
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels -----------Done
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]) -----------Done
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class ----------Done
  // TODO: The constructor should call the constructor of the parent class, Vehicle -----------Done
  // TODO: The constructor should initialize the properties of the Motorbike class -----------Done
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    frontWheel: Wheel,
    rearWheel: Wheel
  ) {
    super();
    
    this.vin = vin;
    this.color = color;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = [frontWheel, rearWheel];
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not ----------Done
    if (this.wheels.length !== 2) {
      this.wheels = [
        new Wheel('Default Brand', 0),
        new Wheel ('Default Brand', 0)
      ];
    }
  }

  // TODO: Implement the wheelie method ----------Done
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!" -------------Done
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!!`);
  }

  // TODO: Override the printDetails method from the Vehicle class ----------Done
  // TODO: The method should call the printDetails method of the parent class ------------Done
  // TODO: The method should log the details of the Motorbike -----------Done
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels -----------Done
  printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log('Wheels:');
    this.wheels.forEach((wheel, index) => {
      console.log(`  Wheel ${index + 1}: Brand - ${wheel.brand}, Diameter - ${wheel.diameter} inches`);
    });
  }
}


// Export the Motorbike class as the default export
export default Motorbike;
