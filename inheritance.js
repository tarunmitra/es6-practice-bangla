// class er name sob smy uppercase diya hbe
// inheritance
// job-question Object oriented programming er core concepts 4 ta 1. inheritance 2. encapsulation 3. polymorphism 4. abstraction

/*
class Parent {
  constructor(){
    this.fatherName = "Schwerznegger"
  }
}
class Child extends Parent{                          // child er satha parent er jok kore dilam
  constructor(name){
   super();                                         // super()  dile constructor er vitor sob pabe
   this.name = name;
  }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby, baby2);
*/


class Parent {
 constructor(){
   this.fatherName = "Schwerznegger"
 }
}
class Child extends Parent{                         // child er satha parent er jok kore dilam
 constructor(name){
  super();                                         // super()  dile constructor er vitor sob pabe
  this.name = name;
 }
 getFullName(){
    return this.name + " " + this.fatherName;    // amra er vitor function e use korte pari  class er vitor function use korle oi function ke method bole
 }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());


