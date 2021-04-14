Array.prototype.uniq = function() {
  let new_arr = [];
  for (i = 0; i < this.length; i++) {
    if (!new_arr.includes(this[i])) {
      new_arr.push(this[i]);
    }
  };
  return new_arr;
}

Array.prototype.twoSum = function() {

  for (i = 0; i < this.length - 1; i++) {
    for (y = i + 1; i < this.length; y++) {
      if (this[i] + this[y] == 0) {
        return [i, y];
      }
    }
  }
  return null;
}

Array.prototype.transpose = function() {
  let new_arr = []
  // [[ 1 2 3] 
  //  [ 4 5 6]]

  // [[1 4] 
  //  [2 5] 
  //  [3 6]]  
  for (i = 0; i < this[0].length; i++) {
    new_arr[i] = []
    for (y = 0; y < this.length; y++) {
      new_arr[i].push(this[y][i])
    }
  }
  return new_arr
}