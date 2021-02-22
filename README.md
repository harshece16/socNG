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



