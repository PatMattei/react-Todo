// function add(a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Patrick', 'Mykee'];
// var groupB = ['Claire'];
// var final = [3, ...groupA];

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
function ages(person, age) {
	return 'Hi ' + person + ', you are ' + age
}

console.log(ages(...person));
console.log(ages(...personTwo));


var names = ['Mike', 'Ben'];
var final = ['Andrew'];

function greetings(names, final) {
	var all = [...names, ...final]

	all.forEach(function(element) {
		console.log("Hi " + element);
	});

}

greetings(names, final);
//Hi Mike
//Hi Ben
//Hi Andrew