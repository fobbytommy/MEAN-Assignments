/*	Creating Objects III  */

function VehicleConstructor(name, num_of_wheels, num_of_passengers, speed) {
	if (!(this instanceof VehicleConstructor)){
   		return new VehicleConstructor(name, num_of_wheels, num_of_passengers, speed);
 	}

	// private variable:
	var distance_traveled = 0;
	var self = this;

	// private method:
	var updateDistanceTraveled = function() {
		distance_traveled += self.speed;
		return this;
	}

	// public properties:
	this.name = name || 'Vehicle';
	this.wheels = num_of_wheels || '4';
	this.passengers = num_of_passengers || '1';
	this.speed = speed || '10'
	this.vin = Math.floor(Math.random() * 10000000000);

	// public methods:
	this.move = function(noise) {
		updateDistanceTraveled();
		this.makeNoise(noise);
		return this;
	}
	this.distanceShow =	function() {
		return distance_traveled;
	}


}

VehicleConstructor.prototype.makeNoise = function(noise) {
	var sound = noise || "Vroom Vroom!";
	console.log(sound);
	return this;
}

VehicleConstructor.prototype.displayPassengers = function() {
	console.log('Current passengers: ', this.passengers);
	return this;
}

VehicleConstructor.prototype.checkMiles = function (){
	console.log('Distance Traveled: ', this.distanceShow());
	return this;
}

Bike = new VehicleConstructor('bicycle', 2, 1, 10);
Bike.makeNoise('ring ring!');
console.log(Bike.vin);
console.log(Bike.vin);
console.log(Bike.vin);
Bike.checkMiles();
Bike.move().move().move().checkMiles();
