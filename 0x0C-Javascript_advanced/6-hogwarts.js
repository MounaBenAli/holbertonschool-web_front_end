#!/usr/bin/node
//module

class studentHogwarts {
    constructor(name) {
        this.name = name;
        this.privateScore = 0;
    }
    changeScoreBy = function (points) {
        this.privateScore = points + this.privateScore;
    };

    setName = function (newName) {
        this.name = newName;
    };

    rewardStudent = function () {
        this.changeScoreBy(1);
    };

    penalizeStudent = function () {
        this.changeScoreBy(-1);
    };

    getScore = function () {
        return this.name + ": " + this.privateScore;
    };
};

let harry = new studentHogwarts('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());


let draco = new studentHogwarts('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); 
