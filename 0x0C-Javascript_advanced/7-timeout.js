#!/usr/bin/node
//


console.log('Start of the execution queue');
setTimeout(function() {
    console.log('Final code block to be executed');
}, 0);
let counter = 1;
while (counter < 101) {
console.log(counter)
counter++;
}
console.log('End of the loop printing');
