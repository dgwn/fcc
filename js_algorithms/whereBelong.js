function getIndexToIns(arr, num) {
  arr.sort(function(a,b) {return a-b});
  //console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
        return i;
    }
    else if (num < arr[0]) {
      return 0;
    }
    else if (num > arr[arr.length-1]) {
      return arr.length;
    }
  }
  return 0;
}

//
//getIndexToIns([10, 20, 30, 40, 50], 30)
//getIndexToIns([5, 3, 20, 3], 5)
getIndexToIns([2, 5, 10], 15);
