// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var firstTwoNumbers = cardNumber[0] + cardNumber[1];
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (firstTwoNumbers === '38' || firstTwoNumbers === '39' & cardNumber.length === 14) {
  	return 'Diner\'s Club';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if (firstTwoNumbers === '34' || firstTwoNumbers === '37' & cardNumber.length === 15) {
  	return 'American Express';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


