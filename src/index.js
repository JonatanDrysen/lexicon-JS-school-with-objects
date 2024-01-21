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

/* 
    i'm gonna use the name property when referencing objects to other object properties
    insted of referencing the object itself. This would not be realistic in a real sense
    because you would need to use cross-referencing, eg. use the object itself, which
    allows for easier access to all the data. But since it's a simple task, i'm gonna
    skip that complexity for now.
*/

// task 5
katherineAnderson.subjects.push(mathematics.name)
mathematics.teacher = katherineAnderson.name
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
programming.students.push(jonatanDrysen.name)
jonatanDrysen.subjects.push(programming.name)
console.log("task 6: ", programming)