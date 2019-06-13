function convertHTML(str) {
  //split str into array
  let arr = str.split("");

  //keep running this loop as long as one of the characters in question are present
  while (arr.includes("&") || arr.includes("<") || arr.includes(">") || arr.includes("\"") || arr.includes("\'")) {
    //if "&" is present, replace it with "&amo;"
    if (arr.includes("&")) {
      arr.splice(arr.indexOf("&"), 1, "&amp;");
    };
   if (arr.includes("<")) {
     arr.splice(arr.indexOf("<"), 1, "&lt;");
   };
   if (arr.includes(">")) {
     arr.splice(arr.indexOf(">"), 1, "&gt;");
   };
   if (arr.includes("\"")) {
     arr.splice(arr.indexOf("\""), 1, "&quot;");
   };
   if (arr.includes("\'")) {
     arr.splice(arr.indexOf("\'"), 1, "&apos;");
   };
  }
  //recombine array into a string
  arr = arr.join("");
  return arr;
}

convertHTML("Hamburgers < Pizza < Tacos");
