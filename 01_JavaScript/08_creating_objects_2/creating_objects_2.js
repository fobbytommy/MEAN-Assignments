/*	Assignment: Creating Objects II	*/

/****************************************************************************
	Create a VehicleConstructor that takes in the name, number of wheels,
	and number of passengers. Then complete the following tasks:
*****************************************************************************/

function VehicleConstructor(name, num_of_wheels, num_of_passengers, speed){
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, num_of_wheels, num_of_passengers, speed);
	}

	/*  private variable */
	var distance_traveled = 0;

	/* public properties of vehicle object */
	this.name = name || "Vehicle";
	this.num_of_wheels = num_of_wheels || 4;
	this.num_of_passengers =num_of_passengers || 0;
	this.speed = speed || 50;

	/* public methods*/
	this.makeNoise = function(){
		console.log("Vroom vroom!"); // default makeNoise
	}
	this.updateDistanceTraveled = function() {
		distance_traveled += this.speed; // accessing private variable
	}
	this.move = function() {
		this.updateDistanceTraveled();
		this.makeNoise();
	}
	this.checkMiles = function() {
		console.log(distance_traveled);
	}

}

// class Vehicle {
// 	constructor(name, num_of_wheels, num_of_passengers, speed){
//
// 		/*  private variable */
// 		var distance_traveled = 0;
//
// 		/* private properties of vehicle object */
// 		this.name = name || "Vehicle";
// 		this.num_of_wheels = num_of_wheels || 4;
// 		this.num_of_passengers =num_of_passengers || 0;
// 		this.speed = speed || 50;
//
// 		/* private methods*/
// 		this.makeNoise = function(){
// 			console.log("Vroom vroom!"); // default makeNoise
// 		}
// 		this.updateDistanceTraveled = function() {
// 			distance_traveled += this.speed; // accessing private variable
// 		}
// 		this.move = function() {
// 			this.updateDistanceTraveled();
// 			this.makeNoise();
// 		}
// 		this.checkMiles = function() {
// 			console.log(distance_traveled);
// 		}
//
// 	}
//
// }


/***************************************************************************
	Then complete the following tasks:
****************************************************************************/
	//Using the constructor, create a Sedan
	var Sedan = new VehicleConstructor('Sonata', 4, 5, undefined);
	console.log(Sedan.name);
	console.log(Sedan.speed);
	console.log(Sedan.num_of_wheels);
	console.log(Sedan.num_of_passengers);
	Sedan.checkMiles();
	Sedan.updateDistanceTraveled();
	Sedan.checkMiles();
	Sedan.move();
	Sedan.checkMiles();
