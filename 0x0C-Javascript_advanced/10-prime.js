#!/usr/bin/node
// Executes the function countPrimeNumbers 100 times + Log to the console the time in milliseconds to execute the function 100 times

//Executes the function countPrimeNumbers 100 times
function Execute() {
  for (i = 0; i < 101; i++) {
    countPrimeNumbers();
  }
}

function countPrimeNumbers(){
let count_prime = 0;

for (let x = 2; x <= 100; x++){
        if (isPrime(x)){
            count_prime++;}
        
    }
  return count_prime;

};

function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i = 2; i < (sqrtnum + 1); i++) { 
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  };


var startTime = performance.now();

Execute();

var endTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`)
