// Car
// make
// model
// vin
// getDescription

 class Person {
     constructor(name = 'Anonymous', age = 0) {
         this.name = name;
         this.age = age;
     }

     getGreeting(){
         return `Hi. I am ${this.name}!`;
     }

     getDescription() {
         return `${this.name} is ${this.age} year${this.age === 0? '':'s'} old.`;
     }
 }

 class Student extends Person {
     constructor(name, age, major) {
         super(name,age);
         this.major = major
     }

     hasMajor() {
        return !!this.major;
     }

     getDescription() {
         return `${super.getDescription()}${this.hasMajor()? `Their major is ${this.major}`:""}`
     }
 }

 class Traveler extends Person {
     constructor(name, age, homeLocation){
         super(name, age);
         this.homeLocation = homeLocation;
     }

     hasHomeLocation() {
         return !!this.homeLocation;
     }

     getGreeting() {
         return `${super.getGreeting()}${this.hasHomeLocation()? ` I am visiting from ${this.homeLocation}`:""}`
     }

     getDescription() {
         return `${super.getDescription()}${this.hasHomeLocation()? ` Live in ${this.homeLocation}`:""}`
     }
 }

 const me = new Traveler('HuLK Super', 29, 'Banka');
 console.log(me.getDescription());
 console.log(me.getGreeting());

 const other = new Traveler();
 console.log(other.getDescription());
 console.log(other.getGreeting());