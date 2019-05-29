function myReplace(str, before, after) {

  // convert str to array
  str = str.split(" ");

  // find index of before
  let beforeIndex = str.indexOf(before);

  // if index[0] of before is capital, change first letter of after to capital
  if (str[beforeIndex][0] === str[beforeIndex][0].toUpperCase()) {
    // Change first letter to capital
    after = after.charAt(0).toUpperCase() + after.slice(1);

  }

  // replace before in str with after
  str.splice(beforeIndex, 1, after);
  //convert array back to string
  str = str.join(" ");

  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
