function addSchoolTeacher(...teachers) {
    this.teachers.push(...teachers)
}

function addSchoolStudent(...students) {
    this.students.push(...students)
}

function addSchoolSubject(...subjects) {
    this.subjects.push(...subjects)
}

function relegateSchoolStudent(student) {
    if(this.students.includes(student)) {
        this.students = this.students.filter(item => item !== student)
    }
    return;
}

function fireSchoolTeacher(teacher) {
    if(this.teachers.includes(teacher)) {
        this.teachers = this.teachers.filter(item => item !== teacher)
    }
    return;
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
    addSubject: addSchoolSubject,
    relegateStudent: relegateSchoolStudent,
    fireTeacher: fireSchoolTeacher
}