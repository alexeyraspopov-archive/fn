exports.memoize = function(fn, hash){
	var memo = {};

	hash = hash || this.identity;

	return function(){
		var key = hash.apply(this, arguments);
		return memo.hasOwnProperty(key) ? memo[key] : (memo[key] = fn.apply(this, arguments));
	};
};

exports.identity = function(value){
	return value;
};

exports.compose = function(fnA, fnB){
	return function(){
		return fnA(fnB.apply(this, arguments));
	};
};

exports.pipe = function(fns){
	return function(data){
		return fns.reduce(function(data, fn){
			return fn(data);
		}, data);
	};
};

exports.once = function(fn){
	var value;

	return function(){
		if(fn){
			value = fn.apply(this, arguments);
			fn = null;
		}

		return value;
	};
};

exports.invoke = exports.memoize(function(method){
	return function(target, args){
		return target[method].apply(target, args);
	};
});

exports.pluck = exports.memoize(function(property){
	return function(target){
		return target[property];
	};
});

exports.empty = function(){};