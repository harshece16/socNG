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

20 min brea