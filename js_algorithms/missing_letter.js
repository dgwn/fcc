function fearNotLetter(str) {
    //create array of the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //get index of first letter
  let start = alphabet.indexOf(str[0]);


  //check if str is missing any letters
  if (alphabet.includes(str)) {
    return undefined;
  }

  else {
    //iterate thru the alphabet "str.length" number of times, starting at the first letter of str
    for (let i = start; i < str.length + start; i++) {
      //if a letter of str is not the appropriate next letter, return what that letter should be
      if (!str.includes(alphabet[i])) {
        return alphabet[i];
      }
    }
  }

}

fearNotLetter("stvwx");
