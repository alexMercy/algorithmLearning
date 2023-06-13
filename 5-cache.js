function cacheFunction(fn) {
    const cache = {};
    return function (n) {
        if (cache[n]) {
            console.log(`Cache v. result: ${cache[n]}`);
        }
        else {
            cache[n] = fn(n);
            console.log(`Func v. result: ${cache[n]}`);
        }
    }
}

function square(n) {
    return n*n;
}

const cachedSquare = cacheFunction(square);

cachedSquare(4);
cachedSquare(3);
cachedSquare(3);
cachedSquare(2);