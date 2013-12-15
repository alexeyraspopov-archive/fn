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

Create function that use result of the first function for call second function

## Pipe

TBD

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