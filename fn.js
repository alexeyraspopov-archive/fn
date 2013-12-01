function memoize(fn, memo){
	memo = memo || {};

	return function(arg){
		return memo[arg] || (memo[arg] = fn(arg));
	};
}
