fn = {};

fn.memoize = function(fn, memo){
	memo = memo || {};

	return function(arg){
		return memo[arg] || (memo[arg] = fn(arg));
	};
};

fn.compose = function(fnA, fnB){
	return function(){
		return fnA(fnB.apply(this, arguments));
	};
};

fn.pipe = function(fns){
	return function(data){
		return fns.reduce(function(data, fn){
			return fn(data);
		}, data);
	};
};

fn.once = function(fn){
	var value;

	return function(){
		if(fn){
			value = fn.apply(this, arguments);
			fn = null;
		}

		return value;
	};
};

fn.invoke = fn.memoize(function(method){
	return function(target, args){
		return target[method].apply(target, args);
	};
});

fn.empty = function(){};