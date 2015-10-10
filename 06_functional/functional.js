// 06_Functional 

//map
function doubler(element){
	return element * 2;
}
function map(array, callback){
	var newArray = [];
	for(var i = 0; i < array.length; i++){
		newArray.push(callback(array[i]));
	}
	return newArray;
};

//filter
function filter(array, callback){
	var newArr =[];
	for(var i = 0; i < array.length; i++){
		if(callback(array[i])){
			newArr.push(array[i]);
		}
	}
	return newArr;
}

//contains

function contains(collection, specifiedValue){
	for(var key in collection){
		if(collection[key] == specifiedValue ){
			return true;
		}
	}
	return false;
}

//countWords
function countWords(values){
	var array = values.split(" ");
	return array.length;
}

//reduce
function reduce (array, startValue, callback){
	var current = startValue
	for(var i = 0; i < array.length; i++){
		current = callback(current, array[i]);
	}
	return current;
}

//countWordsInReduce
function countWordsInReduce(current, next){
    var count = current;
    var array = next.split(" ");
    count += array.length;
    return count;	
}

//sum
function sum(array){
	
	return reduce(array, 0, function(a, b){return a + b});
}

//every
function every(array, callback){
	var isTrue = true;
	for(var i = 0; i < array.length; i++){
		if(callback(array[i])){
			isTrue == true;
		}
		else{
			return false
		}
	}
	return isTrue;
}

//any
function any(array, callback){
	var isFalse = false;
	for(var i = 0; i < array.length; i++){
		if(callback(array[i])){
			return true;
		}
		else{
			isFalse = false;
		}
	}
	return isFalse;
};




