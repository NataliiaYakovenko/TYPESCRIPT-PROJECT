const students = [
    {
        name: "Nataliia",
        course: "IT",
        averageGrade: 10,
    },
    {
        name: "Roll",
        course: "Mathematics",
        averageGrade: 9,
    },
    {
        name: "Jon",
        course: "History",
        averageGrade: 7,
    },
];
let sumAverageGrade = 0;
let maxAverageStudent = null;
let highestAverageGrade = 0;
let sum = 0;
for (let student of students) {
    sum = sum + student.averageGrade;
    if (student.averageGrade > highestAverageGrade) {
        highestAverageGrade = student.averageGrade;
        maxAverageStudent = student;
    }
}
sumAverageGrade = sum / students.length;
console.log(sumAverageGrade);
console.log(maxAverageStudent);
