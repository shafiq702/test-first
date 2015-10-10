//Object Literals
function setPropertiesOnObjLiteral (obj){

	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function (param){
		return param = param +=1;
	}

} 

//Arrays
function setPropertiesOnArrayObj(arr){
	
	arr.hello = function(str){
		return "Hello!";
	};
	arr.full = "stack";
	arr.push(5);
	arr.twoTimes = function(param){
		return param * 2;
	}
}

//Functions
function setPropertiesOnFunctionObj(funcObj){
	
	funcObj();

	funcObj.year = 2015;
	funcObj.divideByTwo = function(num){
		return num / 2;
	}
	funcObj.prototype.helloWorld = function (){
		return "Hello World"
	};
}

