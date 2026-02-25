type Student = {
  name: string;
  course: string;
  averageGrade: number;
};

const students: Student[] = [
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

let sumAverageGrade: number = 0;
let maxAverageStudent: Student | null = null;
let highestAverageGrade: number = 0;

let sum: number = 0;
for (let student of students) {
  sum = sum + student.averageGrade;
  if(student.averageGrade > highestAverageGrade){
    highestAverageGrade = student.averageGrade;
    maxAverageStudent =student
  }
}
sumAverageGrade = sum /students.length
console.log(sumAverageGrade)
console.log(maxAverageStudent)
