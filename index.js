const studentsArr = [
  {
    name: "Leanne Graham",
    GPA: 3.7,
    role: "Student",
  },
  {
    name: "Ervin Howell",
    GPA: 2.9,
    role: "Hall Monitor",
  },
  {
    name: "Clementine Bauch",
    GPA: 3.4,
    role: "Teacher's Assistant",
  },
  {
    name: "Patricia Lebsack",
    GPA: 4.0,
    role: "Student",
  },
  {
    name: "John Dietrich",
    GPA: 3.7,
    role: "Hall Monitor",
  },
  {
    name: "Dennis Schulist",
    GPA: 3.0,
    role: "Teacher's Assistant",
  },
];

/**
 * Returns the names of each student in the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String} A string containing the names of all the students from the `students` array.
 */
function stringNames(students) {

}

stringNames(studentsArr);
//> "Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, John Dietrich, Dennis Schulist"

/**
 * Returns the names of each student in the class in an array.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String[]} An array of the names of all the students from the `students` array.
 */
function arrayNames(students) {

}

arrayNames(studentsArr);
//> ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'John Dietrich', 'Dennis Schulist']

/**
 * Searches for a student by name.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} name - The name of the student to find.
 * @returns {Object} The student in the class whose name matches.
 */
function findByName(students, name) {

}

findByName(studentsArr, "Clementine Bauch");
//> { "name": "Clementine Bauch", "GPA": 3.4, "role": "Teacher's Assistant" }

findByName(studentsArr, "John Dietrich");
//> { "name": "John Dietrich", "GPA": 3.7, "role": "Hall Monitor" }

/**
 * Returns the average (also known as the mean average) GPA for the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Number} The average GPA for the class.
 */
function findAverageGPA(students) {

}

findAverageGPA(studentsArr);
//> 3.45

/**
 * Returns only the students who have a specific role.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} role - The role of the desired students.
 * @returns {Object[]} The students who have the role.
 */
function filterByRole(students, role) {

}

filterByRole(studentsArr, "Hall Monitor");
//> [
//     {
//         "name": "Ervin Howell",
//         "GPA": 2.9,
//         "role": "Hall Monitor"
//     },
//     {
//         "name": "John Dietrich",
//         "GPA": 3.7,
//         "role": "Hall Monitor"
//     }
// ]

filterByRole(studentsArr, "Teacher's Assistant");
//> [
//     {
//         "name": "Clementine Bauch",
//         "GPA": 3.4,
//         "role": "Teacher's Assistant",
//     },
//     {
//         "name": "Dennis Schulist",
//         "GPA": 3.0,
//         "role": "Teacher's Assistant",
//     }
// ]
