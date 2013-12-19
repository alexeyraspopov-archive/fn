# Functions

Pack of useful functions for better functional programming.

## Memoize

For example you have to calculate factorial

    var factorial = function(n){
        return n === 0 ? 1 : n * factorial(n - 1);
    };

To avoid repeating the calculation of results for previously processed inputs, use `fn.memoize`

    var factorial = fn.memoize(function(n){
        return n === 0 ? 1 : n * factorial(n - 1);
    });

Also you can set hasher function

	var wrap = function(name, age){
		return { name: name, age: age };
	};

Memoize version

	var wrap = fn.memoize(function(name, age){
		return { name: name, age: age };
	}, function(name, age){
		// hash will be a result of concat
		return name + age;
	});

## Compose

Create function that use result of the first function for call second function

## Pipe

    var pipe = fn.pipe([
    	    function(n){ return n + 1; },
    	    function(n){ return n * n; },
    	    function(n){ return 'Hello, ' + n; }
    	]);

    pipe(2); // 2 -> 2 + 1 -> 3 * 3 -> 'Hello, ' + 9

## Once

Call a function once and save result

## Invoke

TBD

    ['first', 'second'].map(fn.invoke('toUpperCase'));

## Pluck

TBD

    [elementA, elementB].map(fn.pluck('textContent'));

## Empty

`fn.empty` is just empty function that you can use as stub