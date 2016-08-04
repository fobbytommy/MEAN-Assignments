/*	JS Fundamentals Part III  */

function personConstructor(person) {
	data = {
		name: person,
		distance_traveled: 0,
		say_name: function() {
			console.log(data.name);
			return data;
		},
		say_something: function(str) {
			console.log(data.name + " says '" + str + "'");
			return data;
		},
		walk: function() {
			console.log(data.name + " is walking..");
			data.distance_traveled += 3;
			return data;
		},
		run: function() {
			console.log(data.name + " is running..");
			data.distance_traveled += 10;
			return data;
		},
		crawl: function() {
			console.log(data.name + " is crawling..");
			data.distance_traveled += 1;
			return data;
		}
	}
	return data
}
person_1 = personConstructor('tommy');
person_1.say_name().say_something('hello mate!').run().run().crawl().run().walk();
console.log(person_1.distance_traveled);

function ninjaConstructor(ninja) {
	data = {
		name: ninja,
		cohort: 'Mean Stack',
		belt_level: "Yellow-belt",
		levelUp: function(){
			if (data.belt_level == "Yellow-belt") {
				console.log('You been promoted to Green-belt!');
				data.belt_level = "Green-belt";
			} else if (data.belt_level == "Green-belt") {
				console.log('You been promoted to Blue-belt!');
				data.belt_level = "Blue-belt";
			} else if (data.belt_level == "Blue-belt") {
				console.log('You been promoted to Red-belt!');
				data.belt_level = "Red-belt";
			} else if (data.belt_level == "Red-belt") {
				console.log('You been promoted to Black-belt!');
				data.belt_level = "Black-belt";
			} else {
				console.log('You reached a maximum level!');
			}
			return data;
		}
	}
	return data;
}
ninja_1 = ninjaConstructor('Tommy');
ninja_1.levelUp().levelUp().levelUp().levelUp().levelUp();
console.log(ninja_1.belt_level);
