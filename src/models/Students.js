function addStudentSubject(...subject) {
    this.subjects.push(...subject)
}

function quitStudentSubject(subject) {
    if(this.subjects.includes(subject)) {
        this.subjects = this.subjects.filter(item => item.name !== subject.name)
    }
    return;
}

export let jonatanDrysen = {
    name: "Jonatan Drysén",
    age: "21",
    gender: "male",
    subjects: [],
    enlistToSubject: addStudentSubject,
    quitSubject: quitStudentSubject
}

export let johnDoe = {
    name: "John Doe",
    age: "30",
    gender: "male",
    subjects: [],
    enlistToSubject: addStudentSubject,
    quitSubject: quitStudentSubject
}

export let janeDoe = {
    name: "Jane Doe",
    age: "27",
    gender: "female",
    subjects: [],
    enlistToSubject: addStudentSubject,
    quitSubject: quitStudentSubject
}

export let alexJohnson = {
    name: "Alex Johnson",
    age: "12",
    gender: "male",
    subjects: [],
    enlistToSubject: addStudentSubject,
    quitSubject: quitStudentSubject
}

export let emilyMiller = {
    name: "emilyMiller",
    age: "25",
    gender: "female",
    subjects: [],
    enlistToSubject: addStudentSubject,
    quitSubject: quitStudentSubject
}