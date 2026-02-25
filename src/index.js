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
let sumGrade = 0;
for (let student of students) {
    sumGrade = sumGrade + student.averageGrade;
}
const totalGrade = sumGrade / students.length;
console.log(totalGrade);
let maxAverageGrade = 0;
for (let student of students) {
    if (student.averageGrade > maxAverageGrade) {
        maxAverageGrade = student.averageGrade;
    }
}
console.log(maxAverageGrade);
