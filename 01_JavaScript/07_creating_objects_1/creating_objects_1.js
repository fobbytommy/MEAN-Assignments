/*	Assignment: Creating Objects I	*/

/****************************************************************************
	Create a VehicleConstructor that takes in the name, number of wheels,
	and number of passengers. Then complete the following tasks:
*****************************************************************************/

function VehicleConstructor(name, num_of_wheels, num_of_passengers){
	/* object that will be returned */
	var vehicle = {};

	/* private properties of vehicle object */
	vehicle.name = name;
	vehicle.num_of_wheels = num_of_wheels;
	vehicle.num_of_passengers =num_of_passengers;

	/* private methods*/
	vehicle.makeNoise = function(){
		console.log("Vroom vroom!"); // default makeNoise
	}

	return vehicle;
}


/***************************************************************************
	Then complete the following tasks:
****************************************************************************/
	//Using the constructor, create a Bike
	var Bike = VehicleConstructor('Bike', 2, 2);
	console.log(Bike.name);
	console.log(Bike.num_of_wheels);
	console.log(Bike.num_of_passengers);
	Bike.makeNoise();

	// Redefine the Bike’s makeNoise method to print “ring ring!”
	Bike.makeNoise = function() {
		console.log("ring ring!");
	}
	Bike.makeNoise();

/* - - - - - - - - - - - - - - - - - - - - - - - */
	// Create a Sedan
	var Sedan = VehicleConstructor('Sonata', 4, 5);
	console.log(Sedan.name);
	console.log(Sedan.num_of_wheels);
	console.log(Sedan.num_of_passengers);
	Sedan.makeNoise();

	// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
	Sedan.makeNoise = function() {
		console.log("Honk Honk!");
	}
	Sedan.makeNoise();

/* - - - - - - - - - - - - - - - - - - - - - - - */
	// Using the constructor, create a Bus
	var Bus = VehicleConstructor('Yellow School Bus', 4, 0);
	console.log(Bus.name);
	console.log(Bus.num_of_wheels);
	console.log(Bus.num_of_passengers);
	Bus.makeNoise();

	// Add a method to Bus that takes in the number of passengers
	// to pick up and adds them to the passenger count​
	Bus.pickUp = function() {
		if (Bus.num_of_passengers < 32) {
			console.log("A student has entered the bus!");
			Bus.num_of_passengers += 1;
		} else {
			console.log("Bus is full!");
		}
		return Bus;
	}

	Bus.pickUp().pickUp().pickUp().pickUp().pickUp().pickUp();
	console.log(Bus.num_of_passengers);
