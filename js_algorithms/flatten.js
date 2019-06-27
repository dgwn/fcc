function steamrollArray(arr) {
  let flatArray = [];

  let flatten = function(item) {
    if (!Array.isArray(item)) {
      flatArray.push(item);
    }
    else for (let a in item) {
      flatten(item[a]);
    }
  }


  arr.forEach(flatten)
  return flatArray;

}

steamrollArray([1, [2], [3, [[4]]]]);
