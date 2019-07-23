function telephoneCheck(str) {

  // determine how many numbers are in the string
  function howManyNumbers(){
    let split = str.split('');
    let numOfNum = 0;
    for (let i = 0; i < split.length; i++) {
      if (!isNaN(parseInt(split[i]))) {
        numOfNum++;
      }
    }
     return numOfNum;
  }

  // check if there are either 10 or 11 numbers in the test
  if (howManyNumbers() === 10) {
    return true;
  }
  else if (howManyNumbers() === 11 && parseInt(str.split('')[0], 10) === 1) {
    return true;
  }
  else return false;

    // if no, false
    // if yes and there are 11 numbers, check if first number is 1
      // if no, false
      // if yes, run checkFormat()

    // checkFormat()


  howManyNumbers();
}

telephoneCheck("555-555-5555");
