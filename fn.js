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

// TODO: think about how real pipes work
// cat file | grep City | sed -e ...
// They have params
function pipe(fns){
	return function(data){
		return fns.reduce(function(data, fn){
			return fn(data);
		}, data);
	};
}

// TODO: think about task
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