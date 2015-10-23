var Mammal = function (name){
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function (){
	return "My name is " + this.name + ", I'm a Mammal"
}

Mammal.prototype.haveBaby = function (){

	this.name = "Baby " + this.name;
	this.offspring.push(this);
	return this;
}

var Cat = function(name, color, offspring) {
	Mammal.call(this, name, offspring);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color){
    this.color = color;
    this.name = "Baby " + this.name;
    this.offspring.push(this);
    return this
};

