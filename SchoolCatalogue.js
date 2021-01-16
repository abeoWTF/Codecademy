class School {
    constructor(nameSchool, level, numberOfStudents) {
        this._nameSchool = nameSchool;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get nameSchool() {
        return this._nameSchool;               
    }

    get level() {
        return this._level;       
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(n) {
        if(typeof (n) === 'number') {
            this._numberOfStudents = n;
    } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
}

    quickFacts() {
        console.log(`${this._nameSchool} educates ${this._numberOfStudents} students at ${this._level} school level.`)
    }


    static pickSubstituteTeacher(arr) {
        var rand = Math.floor(Math.random() *  arr.length);
        return arr[rand]
    }
   

}

class PrimarySchool extends School{
    constructor(nameSchool, numberOfStudents, pickupPolicy) {
        super(nameSchool, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
        
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(nameSchool, numberOfStudents, sportsTeams) {
        super(nameSchool, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith.sportsTeams);