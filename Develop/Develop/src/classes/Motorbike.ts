// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Check if the wheels array has exactly 2 elements, otherwise create default wheels
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
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
      console.log(`  Wheel ${index + 1}: Brand - ${wheel.getTireBrand}, Diameter - ${wheel.getDiameter} inches`);
    });
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
