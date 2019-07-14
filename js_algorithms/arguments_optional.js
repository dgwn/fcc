function addTogether() {
  let checkNum = function(num) {
    return typeof num === 'number' ? num : undefined;
  }

  let a = checkNum(arguments[0]);
  let b = checkNum(arguments[1]);

  if (arguments.length ==2) {
    return a && b ? a+b : undefined;
  }
  else {
    if (a) {
      return function(nextArg) {
        if (checkNum(nextArg)) {
          return a + nextArg;
        }
      };
    }
    else {
      return undefined;
    };
  }
}

addTogether(2,3);
