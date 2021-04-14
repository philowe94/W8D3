function range(start, end) {
    if (start == end) {
        return [end];
    };

    return [start].concat(range(start+1, end));
}

function sumRec(arr) {
    if (arr.length == 1) {
        return arr[0];
    };

    return arr.shift() + sumRec(arr);
}

function exponent1(base, exp) {
    if (exp == 0) {
        return 1;
    };

    return base * exponent1(base, exp - 1);
};

function exponent2(base, exp) {
    if (exp == 0) {
        return 1;
    };

    if (exp == 1) {
        return base;
    }

    if (exp % 2 == 0) {
        return exponent2(base, exp/2) ** 2;
    } else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2 );
    }

}

function fibonacci(n) {
    if (n == 1) {
        return [1];
    };
    if (n == 2) {
        return [1,1];
    };

    let prev_fib = fibonacci(n-1);

    return prev_fib.concat([prev_fib[prev_fib.length-1] + prev_fib[prev_fib.length-2]] );
}