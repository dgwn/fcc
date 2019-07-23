function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];
  var getOP = function(obj) {
    var a = 2 * Math.PI;
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    console.log(orbPeriod);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOP(arr[elem]));
  }

  return newArr;


}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
