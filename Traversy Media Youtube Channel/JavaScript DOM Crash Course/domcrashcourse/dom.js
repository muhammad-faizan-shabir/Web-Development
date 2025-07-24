// EXAMINE THE DOCUMENT OBJECT
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title =123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[7]);
// document.all[7].textContent='Hello';
console.log(document.forms);
//console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// SELECTORS

// getElementById()
console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText= 'Goodbye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<strong>Hello</strong>';
headerTitle.style.borderBottom = '3px solid #000000';
header.style.borderBottom = '3px solid #000000';

// getElementsByClassName()
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';

for(let i = 0; i <items.length; i++)
{
    items[i].style.backgroundColor = '#f4f4f4';
}
items[1].style.backgroundColor = 'yellow';

// getElementsByTagName()
let listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log(listItems[1]);
listItems[1].textContent = 'Hello 2';
listItems[1].style.fontWeight = 'bold';

for(let i = 0; i < listItems.length; i++)
{
    listItems[i].style.color = 'red';
}
listItems[3].style.backgroundColor = 'yellow';

// querySelector()
 header = document.querySelector('#main-header');
 header.style.borderTop = '4px solid #cccccc';

 let input = document.querySelector('input');
 input.value = "Hello Word";

 let submit = document.querySelector('input[type="submit"]');
 submit.value = "SEND";

 let item = document.querySelector('.list-group-item');
 item.style.color = 'green';

 let lastItem = document.querySelector('.list-group-item:last-child');
 lastItem.style.color= 'blue';

 let secondItem = document.querySelector('.list-group-item:nth-child(2)');
 secondItem.style.color= 'coral';

 // querySelectorAll()
 let titles = document.querySelectorAll('.title');
 console.log(titles);
 titles[0].textContent= 'Hello';

 let odd = document.querySelectorAll('li:nth-child(odd)');
 let even = document.querySelectorAll('li:nth-child(even)');
 
for(let i = 0 ; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'orange';
}

for(let i = 0 ; i < even.length; i++)
{
    even[i].style.borderTop = '4px solid red';
}

// PARENTS

var itemList = document.querySelector('#items');

// .parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// .parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

// CHILDREN

// .childNodes: this will capture whitespaces too in the form of text nodes
console.log(itemList.childNodes);

// .children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'green';

// .firstChild: this will capture whitespaces too in the form of text nodes
console.log(itemList.firstChild);

// .firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// .lastChild: this will capture whitespaces too in the form of text nodes
console.log(itemList.lastChild);

// .lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// SIBLINGS

// .nextSibling: this will capture whitespaces too in the form of text nodes
console.log(itemList.nextSibling);

// .nextElementSibling
console.log(itemList.nextElementSibling);

// .previousSibling: this will capture whitespaces too in the form of text nodes
console.log(itemList.previousSibling);

// .previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// CREATE ELEMENTS

// .createElement()
// create a div
let newDiv = document.createElement('div');
// Add class
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
// Add attribute
newDiv.setAttribute('title','Hello Div');

// .createTextNode()
// Create text node
let newDivText = document.createTextNode('Hello World');

// .appendChild()
// Add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

// INSERT CREATED ELEMENTS INTO THE DOM

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';

// .insertBefore()
container.insertBefore(newDiv, h1);

// EVENT LISTENER

// function for inline JavaScript
function buttonClick()
{
    console.log('Button Clicked');
}

// .addEventListener() with Click Event
let button = document.getElementById('button');
button.addEventListener('click',buttonClick2);

function buttonClick2(e)
{
    console.log(123);
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = 'coral';

    // EVENT PARAMETER

    console.log(e);

    // e.target
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    let output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // e.type
    console.log(e.type);

    // e.clientX
    console.log(e.clientX);

    // e.clientY
    console.log(e.clientY);

    // e.offsetX
    console.log(e.offsetX);

    // e.offsetY
    console.log(e.offsetY);

    // e.altKey
    console.log(e.altKey);

    // e.ctrlKey
    console.log(e.ctrlKey);

    // e.shiftKey
    console.log(e.shiftKey);
}

// MOUSE EVENTS

let button2 = document.getElementById('button2');

// click
button2.addEventListener('click',clickEvent);
function clickEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// dblclick
button2.addEventListener('dblclick',dblclickEvent);
function dblclickEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mousedown
button2.addEventListener('mousedown',mousedownEvent);
function mousedownEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mouseup
button2.addEventListener('mouseup',mouseupEvent);
function mouseupEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mouseenter
let box = document.getElementById('box');
box.addEventListener('mouseenter',mouseenterEvent);
function mouseenterEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mouseleave
box.addEventListener('mouseleave',mouseleaveEvent);
function mouseleaveEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mouseover
let box2 = document.getElementById('box2');
box2.addEventListener('mouseover',mouseoverEvent);
function mouseoverEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mouseout
let box3 = document.getElementById('box3');
box3.addEventListener('mouseout',mouseoutEvent);
function mouseoutEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
}

// mousemove
let box4 = document.getElementById('box4');
box4.addEventListener('mousemove',mousemoveEvent);
function mousemoveEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    output.innerHTML = '<h3>MouseX: '+ e.offsetX +'</h3><h3>MouseY: ' + e.offsetY + '</h3>'; 
    box4.style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+",40)";
}

// KEYBOARD & INPUT EVENTS

let itemInput1 = document.querySelector('#input1');
let form = document.querySelector('form');

// keydown
itemInput1.addEventListener('keydown',keydownEvent);
function keydownEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// keyup
let itemInput2 = document.querySelector('#input2');
itemInput2.addEventListener('keyup',keyupEvent);
function keyupEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// keypress
let itemInput3 = document.querySelector('#input3');
itemInput3.addEventListener('keypress',keypressEvent);
function keypressEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

let itemInput4 = document.querySelector('#input4');

// focus
itemInput4.addEventListener('focus',focusEvent);
function focusEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// blur
itemInput4.addEventListener('blur',blurEvent);
function blurEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

let itemInput5 = document.querySelector('#input5');

// cut
itemInput5.addEventListener('cut',cutEvent);
function cutEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// paste
itemInput5.addEventListener('paste',pasteEvent);
function pasteEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

let itemInput6 = document.querySelector('#input6');

// input
itemInput6.addEventListener('input',inputEvent);
function inputEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

let select = document.querySelector('select');

// change
select.addEventListener('change',changeEvent);
//select.addEventListener('input',inputEvent);
function changeEvent(e)
{
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// submit
form.addEventListener('submit',submitEvent);
function submitEvent(e)
{
    e.preventDefault();
    console.log('EVENT TYPE: '+ e.type);
    //console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}