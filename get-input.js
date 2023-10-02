// DON'T TOUCH THE BELOW HELPER FUNCTION!

// It's just a nice function so you don't
// have to deal with arrays yet.

// WE'VE MADE SOME CHANGES!!

// If you call the below function in your
// code, you'll get back the nth thing
// the user typed after `node [filename]`.

// If the user typed in "node nodePractice.js 30 5",
// then `getInput(1)` would return "30", and `getInput(2)`
// would return "5".

function getInput(n) {
  return process.argv[n + 1];
}
const firstName = getInput(1);
const lastName = getInput(2);
const fullName = firstName +' '+lastName;
const firstInitial = firstName[0].toUpperCase;
const lastInitial = lastName[0].toUpperCase;
console.log('Hello' + firstName + ' ' + lastName);
console.log(fullName.toUpperCase()+ 'is your name all capitilized');
console.log(firstInitial +' '+ lastInitial +' ');
console.log(firstInitial.toLowerCase() + lastName.toLowerCase() + '.prsvr@gmail.com');


module.exports = getInput;
