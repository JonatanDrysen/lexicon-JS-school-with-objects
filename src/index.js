import { lexicon } from "./models/School.js"
import { 
    mathematics, 
    programming, 
    english 
} from "./models/Subjects.js"
import { 
    jonatanDrysen,
    johnDoe,
    janeDoe,
    alexJohnson,
    emilyMiller 
} from "./models/Students.js"
import { 
    katherineAnderson, 
    benjaminHughes 
} from "./models/Teachers.js"

// task 5
katherineAnderson.subjects.push(mathematics)
mathematics.teacher = katherineAnderson
console.log("task 5: ", katherineAnderson)
/*
    I used push() instead of unshift() since there's no reason to add from the 
    bottom of the array here.
    This data is useful from an admins perspective because a school is a large
    and complicated system which needs clear documentation to function efficiently.
    It's useful for keeping track of what teacher is in charge of what class etc,
    but this data structure as of now is very primitive and would not work at an
    actual school since it would need to be scaled up immensely to work in an actual
    school system. It would need alot more properties to keep track of, like timetables,
    contact info, payment info, etc. just to name a few. The system would also need an
    actual database to store the data, and the system would need to be alot more robust.
*/

// task 6
programming.students.push(jonatanDrysen)
jonatanDrysen.subjects.push(programming)
console.log("task 6: ", programming)

// task 7
function addSubjectToTeacher() {
    english.teacher = benjaminHughes
    benjaminHughes.subjects.push(english)
    console.log("task 7: ", benjaminHughes)
}
addSubjectToTeacher()

// task 8
benjaminHughes.addSubject(programming)
programming.teacher = benjaminHughes
console.log("task 8: ", benjaminHughes)

// task 9
lexicon.addTeacher(katherineAnderson, benjaminHughes)

jonatanDrysen.enlistToSubject(english)
english.students.push(jonatanDrysen)

lexicon.addStudent(jonatanDrysen, johnDoe, janeDoe, alexJohnson, emilyMiller)

lexicon.addSubject(programming, english, mathematics)
console.log("task 9: ", lexicon)

// task 10
/*
    some similarities between this program and a real admin interface for a school 
    is the basic idea of object management in the teacher, student, and subject 
    object for example. all of these objects have cross-referenced properties that 
    bind them together and make administrative tasks easier, albeit still primitive 
    in this example.
*/

// task 11
jonatanDrysen.quitSubject(english)
english.removeStudent(jonatanDrysen)

benjaminHughes.removeSubject(programming)
programming.removeTeacher(benjaminHughes)

lexicon.fireTeacher(katherineAnderson)
mathematics.removeTeacher(katherineAnderson)

lexicon.relegateStudent(alexJohnson)

console.log("task 11: ", lexicon)

// task 12
/* *playing around with methods yay i'm having a blast.* */

// task 13
