function addTeacherSubject(...subject) {
    this.subjects.push(...subject)
}

function removeTeacherSubject(subject) {
    if(this.subjects.includes(subject)) {
        this.subjects = this.subjects.filter(item => item.name !== subject.name)
    }
}

export let katherineAnderson = {
    name: "Katherine Anderson",
    subjects: [],
    addSubject: addTeacherSubject,
    removeSubject: removeTeacherSubject
}

export let benjaminHughes = {
    name: "Benjamin Hughes",
    subjects: [],
    addSubject: addTeacherSubject,
    removeSubject: removeTeacherSubject
}