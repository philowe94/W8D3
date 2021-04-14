
Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    };
};

Array.prototype.myMap = function(callback) {
    let new_arr = [];

    this.myEach(function(ele) {
        new_arr.push(callback(ele));
    });

    // this.myEach( ele => new_arr.push(callback(ele)));

    // for (let i = 0; i < this.length; i++) {
    //     new_arr.push(callback(this[i]));
    // };
    return new_arr
};

Array.prototype.myReduce = function(callback, initialValue = this.shift()) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc
}