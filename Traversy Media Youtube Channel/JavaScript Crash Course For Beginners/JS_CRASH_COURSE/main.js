// LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only outputs strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// VARIABLES
// var, let, const
let score;
score = 10;
// let can be re-assigned, const can not
score = 31;

const pi = 30;
console.log(score, pi);

// DATA TYPES
// String, Numbers, Boolean, null, undefined, Symbol
const name = 'John'; // string
const age = 30; // number
const rating = 4.5; // number
const isCool = true; // boolean
const x = null; // null
const y = undefined; // undefined
let z; // also undefined
// Check type
console.log(typeof name,typeof age,typeof rating,typeof isCool,typeof x,typeof y,typeof z);

//STRINGS & STRING METHODS
// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String/Literal (better): use backticks ``
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}` ;
console.log(hello);

const s= 'Hello World!';
// Get length
console.log(s.length);
// Change case
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// Get sub string
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
// Split into array
console.log(s.split(''));
const s2='technology, computers, it, code';
console.log(s2.split(', '))

// sinlge line comment

/*
multi
line
comment
*/

// ARRAYS - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true]
console.log(fruits);
// Get one value - Arrays start at 0
console.log(fruits[1]);
// Add value
fruits[5] = 'grapes';
console.log(fruits);
// Add value using push()
fruits.push('mangos');
console.log(fruits);
// Add to beginning
fruits.unshift('strawberries');
console.log(fruits);
// Remove last value
fruits.pop();
console.log(fruits);
// // Check if array
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
// // Get index
console.log(fruits.indexOf('oranges'));

// OBJECT LITERALS: key-value pairs
const person=
{
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies: ['music', 'movies', 'sports'],
    address:
    {
        street: '50 main st',
        city:'Boston',
        state: 'MA'
    } 
}
console.log(person);

// Get single value
console.log(person.firstName, person.lastName);
// Get array value
console.log(person.hobbies[1]);
// Get embedded object
console.log(person.address.city);
// destructuring
const {firstName, lastName, address:{city}}=person;
console.log(firstName, lastName, city);
// Add property
person.email ='john@gmail.com';
console.log(person);

// ARRAYS OF OBJECTS & JSON
const todos = 
[
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];
console.log(todos);

// Get specific object value
console.log(todos[1].text);
// Format as JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// LOOPS
// For
for(let i = 0; i <= 10; i++)
{
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i <= 10) 
{
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++)
{
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for(let todo of todos) 
{
  console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(
  function(todo, i, myTodos) 
  {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
  }
);

// map() - Loop through and create new array
const todoTextArray = todos.map(
  function(todo) 
  {
    return todo.text;
  }
);
console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(
  function(todo) 
  {
    // Return only todos where id is 1
    return todo.id === 1; 
  }
);
console.log(todo1);

// CONDITIONALS
// Simple If/Else Statement
const a = 30;

if(a === 10) 
{
  console.log('a is 10');
} 
else if(a > 10) 
{
  console.log('a is greater than 10');
} 
else 
{
  console.log('a is less than 10')
}

// Switch
color = 'blue';

switch(color) 
{
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue')
}

// Ternary operator / Shorthand if
const v = color === 'red' ? 10 : 20;

// FUNCTIONS
function greet1(greeting = 'Hello', name) 
{
  if(!name) 
  {
    // console.log(greeting);
    return greeting;
  } 
  else 
  {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}
console.log(greet1('Hey'));
console.log(greet1('Hey','Carl'));

// ARROW FUNCTIONS
const greet2 = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet2('Hi'));

// OOP (ES5)

// Constructor Function
function Person(firstName, lastName, dob) 
{
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () 
{
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() 
{
  return `${this.firstName} ${this.lastName}`
}

// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Built in constructors
const name1 = new String('Kevin');
console.log(typeof name1); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'

// ES6 Classes
class Person_ 
{
  constructor(firstName, lastName, dob) 
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() 
  {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() 
  {
    return `${this.firstName} ${this.lastName}`
  }
}

const person3 = new Person_('John', 'Doe', '7-8-80');
console.log(person3);
console.log(person3.getBirthYear());
console.log(person3.getFullName());

// ELEMENT SELECTORS
// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// EVENTS
// Mouse Event
/*btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});
*/
// other mouse events include: mouseover, mouseout
// Keyboard Event
/*const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});
*/

// USER FORM SCRIPT EXAMPLE
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) 
{
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') 
  {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } 
  else 
  {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}