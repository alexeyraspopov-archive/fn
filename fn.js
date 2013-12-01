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

function pipe(fns){
	return function(data){
		return fns.reduce(function(data, fn){
			return fn(data);
		}, data);
	};
}