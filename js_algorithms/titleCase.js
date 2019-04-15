function titleCase(str) {
  str = str.toLowerCase().split(" ");
  let newStr = [];
  for (let i=0; i < str.length; i++) {
    let word = str[i].split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    newStr.push(word);
    console.log(word);
  }
  newStr = newStr.join(" ");
  return newStr;
}

titleCase("I'm a little tea pot");
