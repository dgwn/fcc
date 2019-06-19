function dropElements(arr, func) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (func(arr[0]) == true) {
      return arr;
    }
    else arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
