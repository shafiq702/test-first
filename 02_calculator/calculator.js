function createCalculator () {
	
	var obj = {};
	obj.sum = 0;
	obj.value = function(){
		return this.sum;
	};
	obj.add = function(num){
		 this.sum += num;
	}
	obj.subtract = function(num){
		this.sum -= num;
	}

	return obj;
}
