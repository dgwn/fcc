function smallestCommons(arr) {
  //fill arr
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let i = min+1; i < max; i++) {
    arr.push(i);
  }
  //sort arr big to small
    arr.sort(function(a, b) {
    return b - a;
  });
  //console.log(arr)

  // Implements the Euclidean Algorithm
  function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }

  //calculate lcm using GCD (Euclidean Algorithm)
  let lcm = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let GCD = gcd(lcm, arr[i]);
      lcm = (lcm * arr[i]) / GCD;
    }
    return lcm;

}


smallestCommons([1,5]);
