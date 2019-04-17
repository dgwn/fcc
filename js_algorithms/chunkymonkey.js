function chunkArrayInGroups(arr, size) {
  let chunkedArray = [];
  let chunks = Math.ceil((arr.length / size));

  for (let i = 0; i < chunks; i++) {
    let chunk = arr.splice(0, size);
    chunkedArray.push(chunk);
    //console.log(chunkedArray);
  }

  return chunkedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
