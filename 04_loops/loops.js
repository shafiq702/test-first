//repeat
function repeat (string, num) {
	
	var count = 0;
	var word = "";

	while(count < num){
		word+=string;
		count++;
	}

	return word;
}

//sum
function sum (array){
	var total = 0;

	for(var i = 0; i < array.length; i++){
		total += array[i];
	}

	return total;
}

//GridGenerator
function gridGenerator(num){
	var grid = "";

	for(var i = 0; i <  num; i++){
      for(var j = 0; j < num; j++){
        if((i + j) % 2 === 0 ){
        	grid +="#";
        }
        else(grid += " ");
	  }
      grid+="\n";
    }
    return grid;
}

//largestTriplet
function largestTriplet(num){
    var array = [];
    while(num > 0){    
	    for(var i = 3; i < num; i++){
	        for(var j = i+1; j < num; j++){
	            var iSquared = (i * i);
	            var jSquared = (j * j);
	            var result = Math.sqrt(iSquared + jSquared);
	            
	            if(result === num){
	                array.push(i);
	                array.push(j);
	                array.push(result);
	            }
	        }
	    }
    num--;
}
    return array.slice(0,3);
}


//Join
function join(array, delimiter){
	
	var string = "";
	
	for(var i = 0; i < array.length; i++){
		if(delimiter !== undefined && i !== array.length -1){
		    string+= array[i] + delimiter;
		}
		else{
		    string+= array[i];
		}
	}
	return string;
}

//Paramify
function paramify (obj){
	var string = [];
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
			string.push(key + "=" +obj[key]);
		}
	}
	return string.sort().join("&");
}

