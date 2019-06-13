function uniteUnique(arr) {

  //if next array contains any members from final, remove them
  //add that array to final
  //repeat

  //convert arr to an array of arrays
  let args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  //console.log(args);

  //create new final array
  let combined = [];
  //add first array to final
  //combined.push(args[0]);

  for (let i = 0; i < args.length; i++) {
    let thisArr = args[i];
    //console.log(thisArr);

    //iterate through thisArr, adding any elements not already in combined
    for (let j = 0; j < thisArr.length; j++) {
      if (combined.indexOf(thisArr[j]) == -1) {
      combined.push(thisArr[j]);
      }
    }
  }
  return combined;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
