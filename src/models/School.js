function addSchoolTeacher(...teachers) {
    this.teachers.push(...teachers)
}

function addSchoolStudent(...students) {
    this.students.push(...students)
}

function addSchoolSubject(...subject) {
    this.subjects.push(...subject)
}

export let lexicon = {
    name: "Lexicon",
    address: "Årstaängsvägen 9",
    zipCode: "117 43",
    city: "Stockholm", 
    students: [],
    teachers: [],
    subjects: [],
    addTeacher: addSchoolTeacher,
    addStudent: addSchoolStudent,
    addSubject: addSchoolSubject
}