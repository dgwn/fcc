function sumFibs(num) {
  let thisFib = 1;
  let lastFib = 1;
  let sum = 0;
  let oddSum = 1;
  while (sum <= num) {
    //console.log(thisFib);

    if (thisFib % 2 !== 0) {
      oddSum += thisFib;
      console.log(oddSum);
    }

    sum = thisFib + lastFib;
    lastFib = thisFib;
    thisFib = sum;




  }
  return oddSum;
}

sumFibs(8);
