#!/usr/bin/node
// finds Prime numbers between 2 and 100 & log to console the time in milliseconds to execute the function


//returns count of prime numbers between 2 and 100
function countPrimeNumbers(){
let count_prime = 0;

for (let x = 2; x <= 100; x++){
        if (isPrime(x)){
            count_prime++;}
        
    }
  return count_prime;

};

//returns true if num is prime else false
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

countPrimeNumbers();  
    
var endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`)
