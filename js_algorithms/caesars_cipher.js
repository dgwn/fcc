function rot13(str) { // LBH QVQ VG!
    let splitStr = str.split('');
    let newStr = [];
    // check if character is an uppercase letter
    for (let i = 0; i < splitStr.length; i++) {
        if (str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65) {
            newStr.push(splitStr[i]);
        }
        else {
           let thisLetter = str.charCodeAt(i) + 13;

           if (thisLetter > 90) {
               thisLetter = thisLetter - 26;
               newStr.push(String.fromCharCode(thisLetter));
           }
           else newStr.push(String.fromCharCode(thisLetter));

        }

    }
    return newStr.join("");

}

// Change the inputs below to test
rot13("SERR YBIR?");
