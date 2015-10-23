//factorialIterative
function factorialIterative(num){
	var total = num;
	var temp = num;
	
    while(temp > 1){
        total *= (temp-1);
        temp--;
    }
    return total;
}

//factorial
function factorial(num){
	if(num === 0){
		return 1;
	} else{
		return num * factorial(num-1);
	}
}

//fib
function fib(num){
	if(num === 0 || num === 1){
	    return 1;
	} else{
	    return (fib(num - 1) + fib(num-2));
	}
}

//type
function type(input){
	var array = Object.prototype.toString.call(input).split("");
    array.shift()
    array.pop();
    var answer = array.join("").split(" ")
    return answer[1];
}

//stringify
function stringify(input){
	if(type(input) !== 'Array' && type(input) !== 'Object'){
	    if(type(input) === "String"){
	        return '"' + input + '"';
	    }else{
	        return input + "";
	    }
    }
    else if(type(input) === 'Array'){
		var result = "["
        for(var i = 0; i < input.length; i++){
			if(i+1 !== input.length){
			    result += stringify(input[i]).concat(",");
            }
            else{
                result += stringify(input[i])
            }
        }
        result +="]"
        return result;
    }
    else{
    	var result = "{"
        for(var prop in input){
        	if(prop !== Object.keys(input)[Object.keys(input).length-1])
        	{
				result += '"'+ prop + '"' + ": " + stringify(input[prop]).concat(",");
			} else{
				result += '"'+ prop + '"' + ": " + stringify(input[prop]);
			}
        }
        result +="}"

        return result;
    }
}