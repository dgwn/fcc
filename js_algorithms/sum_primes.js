function sumPrimes(num) {
  let primes = [];
  let thisPrime = 0;
  let checkPrime = 0
  while (thisPrime <= num) {
    //checks if number is prime and if so, adds it to array
    if (isPrime(checkPrime)) {
      primes.push(checkPrime);
      console.log(primes);
    }
    checkPrime = thisPrime + 1;
    thisPrime = checkPrime;
  }

  //sums the primes array
  return primes.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);

}

//checks if number is prime
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}


sumPrimes(10);
