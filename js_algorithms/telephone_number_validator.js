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
    return checkFormat();
  }
  // if there are 11 numbers, make sure the country code is 1
  else if (howManyNumbers() === 11 && parseInt(str.split('')[0], 10) === 1) {
    return checkFormat();
  }
  else return false;

    // checkFormat()
      // check parenth
        // if it contains parentheses, only return true if they are after one (and close 3 places later) or if they begin the num and close 3 places later

  // check whether parentheses have proper closure
  function checkFormat() {
    let split = str.split('');
    // check whether there are no parentheses
    if (!str.includes(")") && !str.includes("(")) {
      console.log("no parenthesis");
      return true;
    }
    // check whether there is an openening parenthesis
    else if (str.includes("(") && str.includes(")")) {
      // check whether the opening parenthesis is an an appropriate spot
      if (split.indexOf("(") === 0 || split.indexOf("(") === 1 || split.indexOf("(") === 2) {
        // check whether the corresponding closing parenethesis
        if (split.indexOf(")") === (split.indexOf("(") + 4)) {
          // check whether there are extra opening parenthesis
          let opening = 0
          for (let i=0; i < split.length; i++) {
            if (split[i] == "(") {
             opening++;
            }
          }
          if (opening === 1) {
            return true
          }
          else return false;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    // check whether opening parenthesis is missing
    else if (str.includes(")") && !str.includes("(")) {
      return false;
    }
    // check whether closing parenthesis is missing while open is present
    else if (str.includes("(") && !str.includes(")")) {
      return false;
    }
    // all other cases
    else return false;

  }

}

telephoneCheck("555-555-5555");
