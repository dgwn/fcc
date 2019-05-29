function pairElement(str) {

  //function which takes an input letter and returns an array with its corresponding pair
  function getPair(char) {
    if (char == "A") {
      return ["A","T"];
    }
    else if (char == "T") {
      return ["T","A"];
    }
    else if (char == "G") {
      return ["G","C"];
    }
    else if (char == "C") {
      return ["C","G"];
    }
  }

  //convert str to array of characters
  str = str.split("");
  //create a blank array to store pairs
  let arr = [];
  //perform getPair on each char of str
  for (let i = 0; i < str.length; i++) {
    //add the new pair to arr
    arr.push(getPair(str[i]));
  }

  return arr;
}

pairElement("ATCGA");
