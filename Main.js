/*
* The vehicle program implements an application that
* creates an object.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-14
*/

///////////////////////////////////////////////////////////////////////////////

class Vehicle {

  constructor() {
    this.speed = 40;
    this.licenseplateNumber;
    this.colour;
    this.numberOfDoors = 4;
    this.maxSpeed = 100;
    this.speedIncreaseDecrease = 10;
  }

  accelerate() {
    this.speed += this.speedIncreaseDecrease;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    return this.speed;

  }

  brake() {
    this.speed -= this.speedIncreaseDecrease;
    if (this.speed < 0) {
      this.speed = 0;
    }

    return this.speed;

  }
  
}

///////////////////////////////////////////////////////////////////////////////

/*
* The Main program implements an application that
* creates a vehicle.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-14
*/

///////////////////////////////////////////////////////////////////////////////

// Creating object.
let someCar = new Vehicle();

someCar.licenseplateNumber = "CAJA 723";
console.log("Set license plate to: " + someCar.licenseplateNumber);
someCar.colour = "White";
console.log("Set colour to: " + someCar.colour);
    

var speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.accelerate();
console.log("Currently going at: " + speed + " kph");
speed = someCar.brake();
console.log("Currently going at: " + speed + " kph");

///////////////////////////////////////////////////////////////////////////////
