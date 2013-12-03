function memoize(fn, memo){
	memo = memo || {};

	return function(arg){
		return memo[arg] || (memo[arg] = fn(arg));
	};
}

function compose(fnA, fnB){
	return function(){
		return fnA(fnB.apply(this, arguments));
	};
}

function pipe(fns){
	return function(data){
		return fns.reduce(function(data, fn){
			return fn(data);
		}, data);
	};
}

function once(fn){
	var value;

	return function(){
		if(fn){
			value = fn.apply(this, arguments);
			fn = null;
		}

		return value;
	};
}

function empty(){}