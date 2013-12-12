fn = {};

fn.memoize = function(fn, hash){
	var memo = {};

	hash = hash || fn.identity;

	return function(){
		var key = hash.apply(this, arguments);
		return memo.hasOwnProperty(key) ? memo[key] : (memo[key] = fn.apply(this, arguments));
	};
};

fn.identity = function(value){
	return value;
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