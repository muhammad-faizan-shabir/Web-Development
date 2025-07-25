// let AND const DECLARATION

var a = 'Test1';
let b = 'Test2';
console.log(a);
console.log(b);

function testVar()
{
	var a = 30;
	
	if(true)
	{
		var a = 50; // this refers to the prevoius 'a' and reassigns it with 50
		console.log(a);
	}
	
	console.log(a);
}
testVar();

function testLet()
{
	let a = 30;
	
	if(true)
	{
		let a = 50;
		console.log(a);
	}
	
	console.log(a);
}
testLet();

for(let i = 0; i < 10; i++)
{
	console.log(i);
}

// console.log(i); this will give an error

const colors = [];
colors.push('red');
colors.push('blue');
console.log(colors);
// colors = 'Green'; this will give an error

// CLASSES AND INHERITANCE

class User
{
	constructor(username, email, password)
	{
		this.username = username;
		this.email = email;
		this.password = password;
	}

	// static method
	static countUsers()
	{
		console.log('There are 50 users');
	}

	register()
	{
		console.log(this.username+' is now registered');
	}
}

let bob = new User('bob', 'bob@email.com', '12345');
bob.register();
// static method can be called without object instantiation
User.countUsers();

class Member extends User
{
	constructor(username, email, password, memberPackage)
	{
		super(username, email, password);
		this.package = memberPackage;
	}

	getPackage()
	{
		console.log(this.username+' is subscribed to the '+this.package+' package');
	}
}

let mike = new Member('mike', 'mike@gmail.com', '123', 'Standard');
mike.getPackage();
mike.register();

// TEMPLATE LITERALS

let name = 'John';

function makeUppercase(word)
{
	return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;

document.getElementById('template').innerHTML = template;

// STRING METHODS

let theString = 'Hello, my name is Brad and I love JavaScript';

// startsWith()
console.log(theString.startsWith('Hello'));
console.log(theString.startsWith('ello'));

// endsWith()
console.log(theString.endsWith('JavaScript'));
console.log(theString.endsWith('JavaScrip'));

// includes()
console.log(theString.includes('love'));
console.log(theString.includes('loves'));

// NUMBER METHODS

// Hex
console.log(0xFF);

// Binary
console.log(0b101011);

// Octal
console.log(0o543);

// isFinite()
console.log(Number.isFinite(3));
console.log(Number.isFinite(-3));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));

// isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1));
console.log(Number.isNaN('string'));

// isInteger()
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(2));
console.log(Number.isInteger(-2));
console.log(Number.isInteger(Infinity));

// DEFAULT PARAMETERS

function greet(greeting = 'Default Value')
{
	console.log(greeting);
}

greet();
greet('Value passed as an argument');

// SPREAD OPERATOR AND REST OPERATOR

function spreadExample(num1,num2,num3)
{
	console.log(num1,num2,num3)
}
args1 = [1,2,3];
spreadExample(...args1);

function restExample(...nums)
{
	console.log(nums);
}
restExample(1,2,3);

// SET AND WEAKSET

let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);
console.log(mySet);
mySet.add('100');
console.log(mySet);
mySet.add({a: 1, b: 2});
console.log(mySet);
mySet.delete(22);
console.log(mySet);
mySet.add('100');
console.log(mySet);
mySet.add('200');
console.log(mySet);
console.log(mySet.size);

mySet.forEach(function(val)
{
	console.log(val);
});

mySet.clear();
console.log(mySet);

let carWeakSet = new WeakSet();
console.log(carWeakSet);

let car1 = 
{
	make: 'Honda',
	model: 'Civic'
}

carWeakSet.add(car1);
console.log(carWeakSet);

let car2 = 
{
	make: 'Toyota',
	model: 'Camry'
}

carWeakSet.add(car2);
console.log(carWeakSet);

carWeakSet.delete(car1);
console.log(carWeakSet);

// MAP AND WEAKMAP

let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']]);
console.log(myMap);
myMap.set('c3', 'Foo');
console.log(myMap);
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size);

let carWeakMap = new WeakMap();
console.log(carWeakMap);

let key1 = 
{
	id: 1
}

let key2 = 
{
	id: 2
}

carWeakMap.set(key1, car1);
console.log(carWeakMap);
carWeakMap.set(key2, car2);
console.log(carWeakMap);
carWeakMap.delete(key1);
console.log(carWeakMap);

// ARROW FUNCTIONS

let nonArrowFucntion = function(a,b)
{
	let sum = a+b;
	console.log(sum);
}
nonArrowFucntion(10,2);

let arrowFunction = (a,b) => 
{
	let sum = a+b;
	console.log(sum);
}
arrowFunction(10,2);

// PROMISES

// promise resolves immediatley
let myPromise1 = Promise.resolve('Foo');
myPromise1.then((res) => console.log(res));

// promise resolves after some delay
let myPromise2 = new Promise(function(resolve, reject)
{
	setTimeout(() => resolve(4), 2000);
});

myPromise2.then((res) => 
{
	res +=3;
	console.log(res);
});

function getData(method, url)
{
	// promise resolves after data is fetched from API
	return new Promise(function(resolve, reject)
	{
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		
		xhr.onload = function()
		{
			if(this.status >= 200 && this.status < 300)
			{
				resolve(xhr.response);
			}
			else 
			{
				reject(
				{
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		
		xhr.onerror = function()
		{
			reject(
			{
				status: this.status,
				statusText: xhr.statusText
			});
		};
		
		xhr.send();
	});
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data)
{
	let todos = JSON.parse(data);
	let output = '';
	
	for(let todo of todos)
	{
		output += `
      <li>
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
      </li>`;
	}

	document.getElementById('template2').innerHTML = output;
}).catch(function(err)
{
	console.log(err);
});

// GENERATORS

// use * for generator
function *g1()
{
	console.log('Hello');
	yield 'Yield 1 Ran..';
	console.log('World');
	yield 'Yield 2 Ran...';
	return 'Returned..';
}

let g = g1();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

g = g1(); 
for(let val of g)
{
	console.log(val);
}