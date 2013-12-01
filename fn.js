function memoize(fn, memo){
	memo = memo || {};

	return function(arg){
		return memo[arg] || (memo[arg] = fn(arg));
	};
}

function compose(fnA, fnB){
	return function(){
		return fnA(fnB.apply(null, arguments));
	};
}

function pipe(){
	var fns = Array.prototype.slice.call(arguments);

	return function(data){
		return fns.reduce(function(data, fn){
			return fn(data);
		}, data);
	};
}