function translatePigLatin(str) {
  let pigIt = str;
  let vowel = /[aeiou]/gi;

  if (pigIt[0].match(vowel)) {
    console.log("first letter is a vowel");
    return pigIt+"way";
  }
  else if (pigIt.match(vowel) === null) {
    console.log("no vowels");
    return pigIt+"ay";
  }
  else {
    console.log("first letter is not a vowel");
    let vPosition = pigIt.indexOf(pigIt.match(vowel)[0]);
    let prefix = pigIt.substring(0, vPosition);
    return pigIt.substring(vPosition) + prefix + "ay";
  };

}

translatePigLatin("glove");
