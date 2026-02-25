

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

let sumGrade: number =0
for (let student of students) {
   sumGrade = sumGrade + student.averageGrade
}

const totalGrade: number = sumGrade/ students.length

console.log(totalGrade)


let maxAverageGrade: number = 0;
for(let student of students ){
  if(student.averageGrade > maxAverageGrade){
    maxAverageGrade = student.averageGrade;
  }
}

console.log(maxAverageGrade)
