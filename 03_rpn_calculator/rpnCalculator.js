RPNCalculator.prototype = [];

function RPNCalculator () {
	this.total = 0;
}

RPNCalculator.prototype.value = function(){
		 
		 this.total = this[this.length-1];
		 return this.total;
};

RPNCalculator.prototype.plus = function(){
		var poppedFirst = this.pop();
		var poppedSecond = this.pop();
		var result = poppedSecond + poppedFirst;

		if(isNaN(result)){
			throw "rpnCalculator is empty";
		}
		else
		this.push(result);
};

RPNCalculator.prototype.minus = function(){
		var poppedFirst = this.pop();
		var poppedSecond = this.pop();
		var result = poppedSecond - poppedFirst
		console.log(result);
		if(isNaN(result)){
			throw "rpnCalculator is empty";
		}
		else
		this.push(result);
};

RPNCalculator.prototype.divide = function(){
		var poppedFirst = this.pop();
		var poppedSecond = this.pop();
		var result = poppedSecond / poppedFirst;
		if(isNaN(result)){
			throw "rpnCalculator is empty";
		}
		else
		this.push(result);
};

RPNCalculator.prototype.times = function(){
		var poppedFirst = this.pop();
		var poppedSecond = this.pop();
		var result = poppedSecond * poppedFirst;
		if(isNaN(result)){
			throw "rpnCalculator is empty";
		}
		else
		this.push(result);
};
