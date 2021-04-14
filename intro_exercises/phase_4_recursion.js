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

function deepDup(arr) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] instanceof Array)) {
            new_arr.push(arr[i]);
        } else {
            new_arr[i] = deepDup(arr[i]);
        }
    }
    return new_arr;
}

function bsearch(arr, target) {
    let len = arr.length;
    let midpoint = Math.floor(len / 2);
    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint, len);

    if (len == 0) {
        return -1;
    }

    if (arr[midpoint] == target) {
        return midpoint;
    } else if (arr[midpoint] > target) {
        return bsearch(left, target);
    } else {
        return left.length + bsearch(right, target);
    }
}

function merge(left, right) {

    if (left.length == 0) {
        return right
    } else if (right.length == 0) {
        return left
    }
    if (left[0] < right[0]) {
        
        return [left.shift()].concat(merge(left, right));
    } else if (right[0] < left[0]) {
        return [right.shift()].concat(merge(left, right));
    }
}

function mergesort(arr) {
    if (arr.length == 1) {
        return arr
    }
    let len = arr.length;
    let midpoint = Math.floor(len / 2);
    let left = mergesort(arr.slice(0, midpoint));
    let right = mergesort(arr.slice(midpoint, len));

    return merge(left, right);
}