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

