# JavaScript and Angular Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/socNG
--------------------------------------------------------------

Softwares Required:
1) Visual Studio Code.
2) Chrome Web Browser
3) NodeJS Latest LTS
------------------------------------


JavaScript:
	==> Scripting language, loosely typed, interpreted language

	ECMAScript ==> 5 version 
	ES2015
	ESNext


	var x = "Smith";

	x = 24;

	x = true;
==================================================

first.js

//
	c is global scope
	b is function scope.
	JS engine doesn't understand block scope
//

var g = 100;

function doTask() {
	var a = 10;
	if( g > a) {
		var b = 20;
		c  = 50;
	}

	console.log(g, a, b, c);
}

doTask()
console.log(g, a, b, c);

============================================================


second.js

function add(x,y) {
	return x + y;
}

console.log(add(4,5)); // 9

--------------
semi-colon insertion [ AST ]

function add(x,y) {
	return 
		x + y;
}

console.log(add(4,5)); // undefined

return;
x + y; // unreachable
======

function doTask() {
	
}

x = doTask(); // value of x is undefined
---------------------------------------------------------

Object Oriented Programming with JS
-----------------------------------

1) var obj = new Object();

	// add state

	obj.name = "Peter";
	obj.age = 26;

	// add behaviour

	obj.getInfo = function() {
		return this.name + this. age;
	}


var add = new Function("x","y", "return x + y");
var one = add;

add(2,4); // 6
one(5,6); // perfect
-------------------------------------------------------

2) Function constructors

	function Person(name, age) {
		this.name = name;
		this.age = age;
	}


	var p1 = new Person("Raj",45);
	var p2 = new Person("Smitha", 24);

	Person("Tim", 24);

	// Adding object owned instance methods

	function Person(name, age) {
		this.name = name;
		this.age = age;
		this.getName = function() {
			return this.name;
		}
		this.getAge = function() {
			return this.age;
		}
	}

	var p1 = new Person("Raj",45);
	var p2 = new Person("Smitha", 24);

	=================
Addy Osmani

// Adding class owned instance methods

	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	Person.prototype.getName = function() {
			return this.name;
	}
	
	Person.prototype.getAge = function() {
			return this.age;
	}

	var p1 = new Person("Raj",45);
	var p2 = new Person("Smitha", 24);
===============
 
 3) JSON ==> JavaScript Object Notation ==> Singleton object
 	==> Prefer JSON: if only state is there; or state + behaviour for singleton

 	var obj = {};

 	var person = {
 		"name" : "Peter",
 		"age": 26,
 		"getName": function() {
 			return this.name;
 		}
 	};

 	var product = {
 		"name" : "iPhone 12",
 		"price": 98000.00
 	};

 	var products = [{"name": "IPhone"}, {"name": "Sony Bravia"}];

 	======
 	JSON ==> carriers of data
 ------------------------

 var person = {
 		"name" : "Peter",
 		"age": 26,
 		"getName": function() {
 			return this.name;
 		},
 		"getAge" : function() {
 			return this.age;
 		}
 	};

 	var product = {
 		"name" : "iPhone 12",
 		"price": 98000.00
 	};


person.getName(); // Peter

var ref = person.getName; // reference is obtained but context is not copied; has global context

ref(); // "" ==> got the name of "window"

var ref2 = person.getName.bind(person);
-------------------------------------------------

 var person = {
 		"name" : "Peter",
 		"age": 26,
 		"getName": function() {
 			return this.name;
 		},
 		"getAge" : function() {
 			return this.age;
 		}
 	};

 	var product = {
 		"name" : "iPhone 12",
 		"price": 98000.00
 	};


 function update(name) {
 	this.name = name;
}

update.call(person,"Jack");
update.call(product, "Oppo");

-----------------

method.invoke(obj,args);
-----------------------------------------------


class Person {
	public void test() {

	}
}

Person p = new Person();
p.test(); // ==> test(p); ==> first argument is implicit this
----------------------------------------------------------------------------------

Functional Style of Programming
-------------------------------
	High Order Functions: functions which accept function as arguments; functions which return a function
	==> treat function as first class members ==> similar to primitive or object

	var data = [45,26,722,782,221];

	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}

	for(var i = 0; i < data.length; i++) {
		alert(data[i]);
	}


	for(var i = 0; i < data.length; i++) {
		sendResponse(data[i]);
	}
===========
	var data = [45,26,722,782,221];
	var names = ["Brad", "Angelina", "George","Lee"];
	// HOF
	function forEach(elems, action) {
		for(var i = 0; i < elems.length; i++) {
			action(elems[i]);
		}
	}

	forEach(data, console.log);
	forEach(data, alert);
	forEach(names, console.log);
==============================================
HOF's: map, filter, reduce, forEach, limit, skip, flatMap

OOP ==> Methods Tightly copuled to state of object

Account ==> deposit(); withdraw() ==> methods are tightly coupled to "balance" state
Functional style of programming ==> functionality which can be used on any type of data

https://pexwebrtc.socgen.com/webapp2/conference/WRTC.0DCJ7ZT0.pamela.paul@socgen.com?muteCamera=true
===============================================================

Lambda experssion ==> JRE ==> can treat this lamda as function [ HOF] or it can treat this 
as short cut for Objects of anonymous class
=======================================================

HOF ==> function return a function
// pure function
function greeting(msg, name) {
	return msg + " " + name;
}

greeting("Good morning", "Smith");
greeting("Good morning", "Sam");
greeting("Good morning", "Zaheer");
greeting("Good morning", "Sita");
===================================================

HOF
function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var morningGreet = greeting("Good morning"); 
// closure ==> returned function can
// access members of outer function
// morningGreet can access "msg" which is a part of closure

console.log(morningGreet("Geetha"));
console.log(morningGreet("Rita"));

var greet = greeting("Good Day");
console.log(greet("Geetha"));
==================================================


getProduct(10); 
	==> Make a REST call 
	==> hit the db and return the value

.....

getProduct(10);
	==> i expect data to come from cache
	==> don't make REST api calls
==================================================




memGetProduct(getProduct);
// memGetProduct has different closure [ Cache is differnet from memFib]

memGetProduct(10);

memGetProduct(10);
======================================
HOF, closure
Memoize Design Pattern ==> implementing cache
===================================================

Module pattern; Memoize; Observable; Factory; Singleton
========================================================
JS ==> Event loop; callback; stack

first.js

console.log("Hello");

setInterval(function time() {
	console.log("Time out");
}, 100);

console.log("Good Day !!!");

$("#add").click(function clicked() {
	console.log("You Clicked!!!");
});

console.log("Bye!!!");
==========================================
Event loop psuedocode:

myFile.js

var pendingTimers = [];
var pendingOSTasks = [];
var pendingOperations = [];  

myFile.runContents();

function shouldContinue() {
	checks the arrays
}

while(shouldContinue()) {
	 // check pendingTimer
	 // check pendingTasks
	 // check pending operations
	 // check setImmediate
	 // handle close events
}
=====================================================

ES2015 ==> ES 6

ES 6 or ESNext ===> TransCompiler ==> lower version [ ES 5]

Transpiler ==> Babel; Tracuer

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.
=====================================================

ES 6 Features:

1) block level scope [ let and const]

var g = 100;

function doTask() {
	var a = 10;
	if( g > a) {
		let b = 20;
		const PI = 3.14159;
		c  = 50;
	}

	console.log(g, a, b, c); // b, PI is not visible
}

doTask()
console.log(g, a, b, c);  // a, b, PI is not visible
==========================================================

2) Default value and arrow operators
Prior to ES 6
function add(x, y) {
	var result = 0;
	x = x || 0;
	y = y || 0;
	result = x + y;
	return result;
}

add(4,5); // 9
add(4); // x is 4 and y is 0
add(); // x and y are 0

---
ES 6+
function add(x = 0, y = 0) {
	var result = 0;
 	result = x + y;
 	return result;
}
add(4,5); // 9
add(4); // x is 4 and y is 0
add(); // x and y are 0
----------

let sub = (x = 0, y = 0) => x - y;
-------------------------------------------------

3) New String literal 
	`Hello` 

	ES 5 had two ways to declare a string
	'test'
	"world"

	------------

	var name = "Roger";

	var elem = `
		<div>
			Welcome ${name},
			Angular Training
			SocGen
		</div>
	`;

	----------
	Old Way:
	elem = "<div> Welcome" + name + "<br/> Angular Training <br />";
--------------------------------
4) Promise API
  	make a promise call ==> that can resolve or reject

  	Synchronous:
  	function doTask() {

  	}

  	let res = doTask();

  	console.log("Got result ", res); // blocked
  	--------

  	ASynchronous which is promise based:
  	function doTask() {

  	}

  	doTask().then(
  		(data) => console.log(data), /* resolve code */
  		(err) => console.log(err) /* reject code */
  	);

  	console.log("Got result "); // not blocked


	fetch('https://jsonplaceholder.typicode.com/users')
		.then( res => res.json())
		.then(data => console.log(data));
=====
npm i axios
	axios.get(url, callback);
=============================================
5) Async and await to simplify Promise based API and avoid lots of callback

	function someTask() {
		firstTask().then( data => secondTask(data) {

			}. then(thirdTask(data) {
				
				}))
	}
	