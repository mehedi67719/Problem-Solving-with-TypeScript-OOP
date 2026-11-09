// Problem 1
function multiplyValue (value :number,multiplier?:number):number{
if(multiplier !== undefined){
    return value*multiplier
}

else{
    return value*2
}
}

const multiplyValueresult=multiplyValue(10)
const multiplyValueresult2=multiplyValue(10, 5);
const multiplyValueresult3=multiplyValue(7, 0);


console.log(multiplyValueresult)
console.log(multiplyValueresult2)
console.log(multiplyValueresult3)



// problem 2

function processInput (value:string|number|boolean):string|number{
if(typeof value=="string"){
    return value.trim().toLowerCase()
}

else if(typeof value=="number"){
    return value*10;
}


else{
    if(value==true){
        return "Active"
    }
    else{
        return "Inactive"
    }
}


}


const processInputresult=processInput("  TypeScript  ");
const processInputresult1=processInput(7);
const processInputresult2=processInput(true);
const processInputresult3=processInput(false);

console.log(processInputresult)
console.log(processInputresult1)
console.log(processInputresult2)
console.log(processInputresult3)



// problem 3

function formatCoordinate (
    location:readonly[number,number,string]
):string{
const [latitude,longitude,locationName]=location 
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const formatCoordinat=formatCoordinate([23.81, 90.41, "Dhaka"]);

console.log(formatCoordinat)



// Problem 4:

function concatenateArrays<T>(...arrays: T[][]):T[]{
    return arrays.flat()
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));

console.log(concatenateArrays([1, 2], [3, 4], [5]));




// Problem 5:


interface Course {
    title :string
    students :number
    isPublished :boolean
}



function getPopularCourses  (courses:Course[],minStudents :number):Course[]{

    return courses.filter(course => {
        return course.isPublished === true &&
               course.students >= minStudents;
    });
   
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80))




// Problem 6:

function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {

    return items.map(item => item[key]);

}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "id"))
console.log(pluckValues(users, "name"))



// Problem 7:

class Employee {
    protected name :string;
    private baseSalary :number;


    constructor(name:string,baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}


class Manager extends Employee{
    private department :string

    constructor(name: string, baseSalary: number, department: string){
        super(name,baseSalary)

        this.department=department
    }

    getRoleInfo():string{
  
        return `Manager of ${this.department}: ${this.name}`
    }
}


const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails())
console.log(manager.getRoleInfo())