Array.prototype.bubbleSort = function() {
  let new_arr = this;
  let sorted = false;
  while (sorted === false) {
    sorted = true
    for (let i = 0; i < new_arr.length - 1; i++) {
      if (new_arr[i] > new_arr[i + 1]) {
        let swap = new_arr[i];
        new_arr[i] = new_arr[i + 1];
        new_arr[i + 1] = swap;
        sorted = false;
      }
    }
  }
  return new_arr
}

String.prototype.substrings = function() {
  let new_arr = [];
  for (let i = 0; i <= this.length; i++) {
    for (let y = i + 1; y <= this.length; y++) {
      new_arr.push(this.substring(i, y));
    }
  }
  return new_arr
}