/*
class Student{
   constructor(){
      this.id = 1;
      this.name = "mahi";
   }
}

const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);
*/

// constructor er paramiter changeble hbe input users er icha mto hbe
/*
class Student{
  constructor(sId, sName){
   this.id = sId;
   this.name = sName;
   this.school = "kolimunnesa school"  // default vabe sby pabe
  }
}
const student1 = new Student(12, "Shovo");
const student2 = new Student(22, "mahiya");
console.log(student1, student2)
*/


class studentInfo{
  constructor(sId, sName, scName){
   this.id = sId;
   this.name = sName;
   this.school = scName;
  }
}
const student1 = new studentInfo(12, "Shovo", "Azimuddin collage");
const student2 = new studentInfo(22, "mahiya", "M.A Mazid collage");
const student3 = new studentInfo(24, "Tarun mitra", "Rajshahi Collage");
console.log(student1, student2, student3)

// console.log(student1.school, student2.name);  // sodu name and school dakte chaile