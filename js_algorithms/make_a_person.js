var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.setFirstName = function(input) {
    fullName = input + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(input) {
    fullName = fullName.split(" ")[0] + " " + input;

  };

  this.setFullName = function(input) {
    fullName = input;
  };


};

var bob = new Person('Bob Ross');
bob.getFullName();
