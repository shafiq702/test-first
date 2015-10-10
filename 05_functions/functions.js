// Functions.js

//concat_string
function concat_string(){
	var args = Array.prototype.slice.call(arguments);
	return args.join("");
}

//yourFunctionRunner
function yourFunctionRunner() {
    var array = [];
	for(var i = 0; i < arguments.length; i++){
	    array.push(arguments[i]());
	}
	
	return array.join("");
}

//makeAdder
function makeAdder(number){
	var total = number;
	function insideFunction(num){
		return total+= num;
	}

	return insideFunction;
}

//once
function once(inc){
	var ran = false
		function newFunction(){
			if (ran == false){
				inc();
				ran = true;
			}
		}
	return newFunction;
}


//createObjectWithTwoClosures
function createObjectWithTwoClosures(obj){
	var num = 0
	var obj = {};
	obj.oneIncrementer = function() {
		num++
	};
	obj.tensIncrementer = function() {
		num+=10
	};
	obj.getValue = function(){
		return num
	};
	return obj;
}