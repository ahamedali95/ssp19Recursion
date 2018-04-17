//NESTING

//comes into play with arrays and objects

var myArr = [true, 3, "hello", {name: "John"}, [1,2,3]];

var myObj = {
	groceryList: ["apples", "oranges", "bananas"],
	myFavoritePet: {
		name: "Rover",
		species: "dog",
		tagInfo: {
			name: "Rover",
			owner: "John"
		}
	}
}

console.log(myObj.myFavoritePet.tagInfo.owner);
console.log(myObj.groceryList);

var arrayA = ["hello", "world", "hack", "reactor", "comeGetMe!", "is", "awesome"];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin",];
var objA = {
    name : "Joker",
    favoriteColor : "Purple",
    catchPhrase : "comeGetMe!"
}
var objB = {
    yogurtFlavor : "Vanilla Tart",
    serialNumber : "64928599301ADDG",
    companyName : "comeGetMe!",
    shippingAddress : "1600 Pennsylvania Ave NW, Washington, D.C."
}

var word = "catchPhrase";
console.log(objA[word]);

var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
 	}
 };

 console.log(myStore.pets);
 //How would you access and store the value of the property pets?
 myStore.pets["rabbits"] = 50;
 console.log(myStore.pets);

 //Retrieve the number of each pet the pets object. Store each of them in variables for easy reference later.
var num = [];
for (var pet in myStore.pets) {
	num.push(myStore.pets[pet]);
}

console.log(num);


var bigBox = {
    smallBoxA : {weight : 12, volume : 15, full : true},
    smallBoxB : {weight : 22, volume : 12, full : false},
    smallBoxC : {weight : 19, volume : 19, full : false}
}

var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var weightOfSmallBoxB = bigBox.smallBoxB.weight;
var isSmallBoxCFull = bigBox.smallBoxC.full;
console.log(volumeOfSmallBoxA);
console.log(weightOfSmallBoxB);
console.log(isSmallBoxCFull);

function boxMaker() {
	var boxObj = {
		length: 40,
		width: 20,
		height: 10,
		contents: ["dolls", "toys"]
	}

	return boxObj;
}

console.log(boxMaker());

function rand(num) {
	return Math.floor(Math.random() * ((num-1) - (2) + 1)) + 2;
}
console.log(rand(10));

var sampleBox1 = boxMaker();
var sampleBox2 = boxMaker();
var sampleBox3 = boxMaker();

var wareHouse = [];
wareHouse.push(sampleBox1);
wareHouse.push(sampleBox2);
wareHouse.push(sampleBox3);

function orderBoxes(num) {
	for (var i = 0; i < num; i++) {
		wareHouse.push(boxMaker());
	}
}

console.log(orderBoxes(7));

console.log(wareHouse);


function getVolume(obj) {
	return obj.length * obj.width * obj.height;
}

console.log(getVolume(wareHouse[0]));

for (var i = 0; i < wareHouse.length; i++) {
	var box = wareHouse[i];
	box.contents.push("Manuals");
	box.contents.push("mothballs");
}

console.log(wareHouse);


var youDontNeedToWorryAboutAnythingInHere = function() {
    var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
    var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
    var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
    var emptyNetwork = [];

    function createNetwork(collection){

        for (var i = 0; i < NameArray.length; i++) {
            var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
            var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

            collection.push(createNewUser(NameArray[i], randomJob, randomCity));
        }

        return collection
    }

    return createNetwork(emptyNetwork);

}

function createNewUser(username, job, city){
    var newUser = {
        username: username,
        job: job,
        city: city,
        friends: [],
        family: [],
        coworkers: [],
    };

    return newUser;

};
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like

console.dir(joeyProfile);
console.dir(allUsers);

// YOUR CODE HERE

function lastNamepPopularity(network) {
	//an object containing all of the last names in the 
	//network, as well as how many people have each of those
	//last names.

	var lastNames.network.map(function(user) {
		return user.username.split(" ")[1];
	});

	return lastNames.reduce(function(tally, lastName) {
		if (tally.hasOwnProperty(lastName)) {
			tally[lastNames]++;
		} else {
			tally[lastName] = 1;
		}

		return tally;
	}, {});
}

for (var i = 0; i < allUsers.length; i++) {
	var user = allUsers[i];
	var joeysCity = joeyProfile.city;

	if (joeysCity === user.city) {
		joeyProfile.friends.push(user.username);
	}
}



console.dir(joeyProfile);


for (var i = 0; i < allUsers.length; i++) {
	var user = allUsers[i];
	var joeysJob = joeyProfile.job;

	if (joeysJob === user.job) {
		joeyProfile.coworkers.push(user.username);
	}
}


console.dir(joeyProfile);


for (var i = 0; i < allUsers.length; i++) {
	var user = allUsers[i];
	var joeysLastName = joeyProfile.username.split(" ")[1];

	if (joeysLastName === user.username.split(" ")[1]) {
		joeyProfile.family.push(user.username);
	}
}

console.dir(joeyProfile);
console.log("*************************************");

for (var i = 0; i < joeyProfile.family; i++) {
	var familyName = joeyProfile.family[i];
	console.dir("++++++" + familyName);

	for (var j = 0; j < joeyProfile.friends; j++) {
		var friendName = joeyProfile.friends[j];

		if (familyName === friendName) {
			joeyProfile.friends.splice(j, 1);
		}
	}
}


console.dir(joeyProfile);
