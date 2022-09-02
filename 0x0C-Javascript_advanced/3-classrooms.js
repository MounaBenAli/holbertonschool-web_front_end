#!/usr/bin/node
//Closure and loops

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students[i] = studentSeat(i + 1);
      }
      return students; 
}
//'classRoom' was replaced by 'test' cause I am getting the error identifier has already been declared with this var name
//let classRoom  = createClassRoom(10);
let test  = createClassRoom(10);

console.log(test [0]());
console.log(test [3]());
console.log(test [9]());