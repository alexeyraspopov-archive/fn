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

## Compose

TBD

## Pipe

TBD

## Once

TBD

## Empty

`fn.empty` is just empty function