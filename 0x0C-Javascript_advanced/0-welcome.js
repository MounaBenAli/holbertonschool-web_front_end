#!/usr/bin/node
//function welcome return alert to welcome+fullName


function welcomes (firstName, lastName){
  fullName = firstName + " " + lastName;
    function displayFullName() {
        alert('Welcome' + " " + fullName +'!');
      }
      displayFullName();
}