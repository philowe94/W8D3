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