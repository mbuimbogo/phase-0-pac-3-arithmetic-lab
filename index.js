function add(a,b) {
 return a+b;
}
console.log(2+3)

 function subtract(b,a) {
 return b-a;
 }
 console.log(3-2)

 function multiply(a,b) {
    return a*b;
}
console.log(2*3)

function divide(b,a) {
    return b/a;
}
console.log(3/2)

var n = 5;

function increment(n){

  n++;
  return n;
}
  console.log(increment(n))

  var n = 5;
  function decrement(n) {
    n--;
    return n;
  }
  console.log(decrement(n))

  var n = "5.5";
function makeInt(n) {
   return parseInt(n, 10);
}
console.log(makeInt(n));

var n = "5.5"
function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal(n));