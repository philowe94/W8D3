function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function() { return `${this.fname} ${this.lname}`}

Student.prototype.enroll = function(course) { 
  for (let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) {
      return 'Conflicting course'
    }
  }
  this.courses.push(course) 
} 

Student.prototype.courseLoad = function() {
  const reducer = (acc, e) => acc.set(e.department, (acc.get(e.department) || 0) + e.numCredits);
  let courseLoad = this.courses.reduce(reducer, new Map());
  return courseLoad;
}

function Course(name, department, numCredits, days, block) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.days = days;
  this.block = block;
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

Course.prototype.conflictsWith = function(course) {
  if (this.block == course.block) {
    for (let i = 0; i < this.days.length; i++) {
      for (let y = 0; y < course.days.length; y++) {
        if (this.days[i] == course.days[y]) {
          return true;
        }
      }
    }
  }
  return false;
}

let s1 = new Student('daniel', 'wu')

let course1 = new Course('compsci', 'CS', 4, ['mon', 'wed', 'fri'], 2)
let course2 = new Course('painting', 'art', 4, ['mon', 'wed', 'fri'], 3)
let course3 = new Course('calc', 'math', 4, ['tues', 'wed', 'fri'], 2)