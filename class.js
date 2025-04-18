
// class

class Student{
    
    constructor(name,YOB,place){
        this.name =name;
        this.YOB = YOB;
        this.place = place;
    }

    getAge(){
        return new Date().getFullYear() -this.YOB;
    };
    getName(){
        return this.name;
    }
    getPlace(){
        return this.place;
    }
}

// object

var student1 = new Student("njan",2005,"kacheripadi");
var student2 = new Student("iam",2004,"kacheripadi");
var student3 = new Student("avan",2003,"kacheripadi");

console.log(student1);
console.log(student2);
console.log(student3);