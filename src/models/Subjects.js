function removeStudentfromSubject(student) {
    if(this.students.includes(student)) {
        this.students = this.students.filter(item => item.name !== student.name)
    }
    return;
}

function removeTeacherFromSubject(teacher) {
    if(this.teacher == teacher) {
        this.teacher = {}
    }
    return;
}

export let mathematics = {
    name: "Mathematics",
    students: [],
    teacher: {},
    removeStudent: removeStudentfromSubject,
    removeTeacher: removeTeacherFromSubject
}

export let programming = {
    name: "Programming",
    students: [],
    teacher: {},
    removeStudent: removeStudentfromSubject,
    removeTeacher: removeTeacherFromSubject
}

export let english = {
    name: "English",
    students: [],
    teacher: {},
    removeStudent: removeStudentfromSubject,
    removeTeacher: removeTeacherFromSubject
}