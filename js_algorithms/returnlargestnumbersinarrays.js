function largestOfFour(arr) {
  // You can do this!
  let arrOfMaxes = [];
  //iterate for each subarray
  for (let i = 0; i < arr.length; i++) {
    let maxOfGroup = -10000000
    let thisArr = arr[i];
    //console.log(thisArr);
    for (let j = 0; j < thisArr.length; j++) {
      if (thisArr[j] > maxOfGroup) {
        maxOfGroup = arr[i][j];
      };
    };
    arrOfMaxes.push(maxOfGroup);
  }
  return arrOfMaxes;
}

/*largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
